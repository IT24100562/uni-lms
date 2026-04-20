import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialLmsState, type Assignment, type Course, type LmsState } from "../data/lmsData";

interface LmsContextValue {
  state: LmsState;
  completeLesson: (courseId: number) => void;
  submitAssignment: (assignmentId: number) => void;
  addCourse: (course: {
    title: string;
    code: string;
    instructor: string;
    credits: number;
    schedule: string;
    totalLessons: number;
    tag: string;
    nextLesson: string;
  }) => void;
  addAssignment: (assignment: {
    title: string;
    courseCode: string;
    courseName: string;
    type: string;
    dueDate: string;
    dueTime: string;
    maxGrade: number;
    description: string;
  }) => void;
  updateCourse: (courseId: number, course: {
    title: string;
    code: string;
    instructor: string;
    credits: number;
    schedule: string;
    totalLessons: number;
    tag: string;
    nextLesson: string;
  }) => void;
  deleteCourse: (courseId: number) => void;
  updateAssignment: (assignmentId: number, assignment: {
    title: string;
    courseCode: string;
    courseName: string;
    type: string;
    dueDate: string;
    dueTime: string;
    maxGrade: number;
    description: string;
  }) => void;
  deleteAssignment: (assignmentId: number) => void;
  markNotificationRead: (notificationId: number) => void;
  markAllNotificationsRead: () => void;
}

const STORAGE_KEY = "lms-state-v2";

const LmsContext = createContext<LmsContextValue | undefined>(undefined);

function resolveCourseStatus(progress: number): Course["status"] {
  if (progress >= 100) {
    return "completed";
  }
  if (progress >= 80) {
    return "almost_done";
  }
  return "in_progress";
}

function withRecentActivity(state: LmsState, title: string, description: string): LmsState {
  return {
    ...state,
    activities: [
      {
        id: Date.now(),
        type: "completed",
        title,
        description,
        time: "Just now",
      },
      ...state.activities.slice(0, 9),
    ],
  };
}

function getDaysLeft(dueDate: string): number {
  const due = new Date(dueDate);
  if (Number.isNaN(due.getTime())) {
    return 0;
  }

  const today = new Date();
  const startToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startDue = new Date(due.getFullYear(), due.getMonth(), due.getDate());
  const diffMs = startDue.getTime() - startToday.getTime();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function LmsProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LmsState>(() => {
    if (typeof window === "undefined") {
      return initialLmsState;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return initialLmsState;
    }

    try {
      return JSON.parse(raw) as LmsState;
    } catch {
      return initialLmsState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const completeLesson = (courseId: number) => {
    setState((prev) => {
      const target = prev.courses.find((course) => course.id === courseId);
      if (!target || target.completedLessons >= target.totalLessons) {
        return prev;
      }

      const updatedCourses: Course[] = prev.courses.map((course) => {
        if (course.id !== courseId) {
          return course;
        }

        const completedLessons = Math.min(course.completedLessons + 1, course.totalLessons);
        const progress = Math.round((completedLessons / course.totalLessons) * 100);
        return {
          ...course,
          completedLessons,
          progress,
          status: resolveCourseStatus(progress),
        };
      });

      return withRecentActivity(
        {
          ...prev,
          courses: updatedCourses,
        },
        "Completed Lesson",
        `${target.title} - progress updated`
      );
    });
  };

  const submitAssignment = (assignmentId: number) => {
    setState((prev) => {
      const target = prev.assignments.find((assignment) => assignment.id === assignmentId);
      if (!target || target.status !== "pending") {
        return prev;
      }

      const updatedAssignments: Assignment[] = prev.assignments.map((assignment) =>
        assignment.id === assignmentId
          ? {
              ...assignment,
              status: "submitted",
            }
          : assignment
      );

      const updated = {
        ...prev,
        assignments: updatedAssignments,
        notifications: [
          {
            id: Date.now(),
            type: "course" as const,
            title: "Submission Confirmed",
            desc: `${target.title} was submitted successfully`,
            time: "Just now",
            unread: true,
          },
          ...prev.notifications,
        ].slice(0, 15),
      };

      return withRecentActivity(updated, "Assignment Submitted", target.title);
    });
  };

  const addCourse = (course: {
    title: string;
    code: string;
    instructor: string;
    credits: number;
    schedule: string;
    totalLessons: number;
    tag: string;
    nextLesson: string;
  }) => {
    setState((prev) => {
      const nextId = prev.courses.length === 0 ? 1 : Math.max(...prev.courses.map((item) => item.id)) + 1;
      const created: Course = {
        id: nextId,
        title: course.title,
        code: course.code.toUpperCase(),
        instructor: course.instructor,
        credits: course.credits,
        schedule: course.schedule,
        progress: 0,
        totalLessons: course.totalLessons,
        completedLessons: 0,
        enrolled: 0,
        rating: 0,
        status: "in_progress",
        color: "from-teal-500 to-cyan-500",
        tag: course.tag,
        nextLesson: course.nextLesson,
      };

      return {
        ...prev,
        courses: [created, ...prev.courses],
        notifications: [
          {
            id: Date.now(),
            type: "course",
            title: "New Course Added",
            desc: `${created.code} - ${created.title}`,
            time: "Just now",
            unread: true,
          },
          ...prev.notifications,
        ].slice(0, 15),
      };
    });
  };

  const updateCourse = (
    courseId: number,
    course: {
      title: string;
      code: string;
      instructor: string;
      credits: number;
      schedule: string;
      totalLessons: number;
      tag: string;
      nextLesson: string;
    }
  ) => {
    setState((prev) => ({
      ...prev,
      courses: prev.courses.map((item) => {
        if (item.id !== courseId) {
          return item;
        }

        const totalLessons = Math.max(1, course.totalLessons);
        const completedLessons = Math.min(item.completedLessons, totalLessons);
        const progress = Math.round((completedLessons / totalLessons) * 100);
        return {
          ...item,
          title: course.title,
          code: course.code.toUpperCase(),
          instructor: course.instructor,
          credits: course.credits,
          schedule: course.schedule,
          totalLessons,
          completedLessons,
          progress,
          status: resolveCourseStatus(progress),
          tag: course.tag,
          nextLesson: course.nextLesson,
        };
      }),
    }));
  };

  const deleteCourse = (courseId: number) => {
    setState((prev) => {
      const target = prev.courses.find((course) => course.id === courseId);
      if (!target) {
        return prev;
      }

      return {
        ...prev,
        courses: prev.courses.filter((course) => course.id !== courseId),
        assignments: prev.assignments.filter((assignment) => assignment.courseCode !== target.code),
      };
    });
  };

  const addAssignment = (assignment: {
    title: string;
    courseCode: string;
    courseName: string;
    type: string;
    dueDate: string;
    dueTime: string;
    maxGrade: number;
    description: string;
  }) => {
    setState((prev) => {
      const nextId = prev.assignments.length === 0 ? 1 : Math.max(...prev.assignments.map((item) => item.id)) + 1;
      const created: Assignment = {
        id: nextId,
        title: assignment.title,
        courseCode: assignment.courseCode.toUpperCase(),
        courseName: assignment.courseName,
        type: assignment.type,
        dueDate: assignment.dueDate,
        dueTime: assignment.dueTime,
        daysLeft: getDaysLeft(assignment.dueDate),
        status: "pending",
        priority: "medium",
        maxGrade: assignment.maxGrade,
        grade: null,
        description: assignment.description,
      };

      return {
        ...prev,
        assignments: [created, ...prev.assignments],
        notifications: [
          {
            id: Date.now(),
            type: "deadline",
            title: "New Assignment Published",
            desc: `${created.title} (${created.courseCode})`,
            time: "Just now",
            unread: true,
          },
          ...prev.notifications,
        ].slice(0, 15),
      };
    });
  };

  const updateAssignment = (
    assignmentId: number,
    assignment: {
      title: string;
      courseCode: string;
      courseName: string;
      type: string;
      dueDate: string;
      dueTime: string;
      maxGrade: number;
      description: string;
    }
  ) => {
    setState((prev) => ({
      ...prev,
      assignments: prev.assignments.map((item) =>
        item.id === assignmentId
          ? {
              ...item,
              title: assignment.title,
              courseCode: assignment.courseCode.toUpperCase(),
              courseName: assignment.courseName,
              type: assignment.type,
              dueDate: assignment.dueDate,
              dueTime: assignment.dueTime,
              daysLeft: getDaysLeft(assignment.dueDate),
              maxGrade: assignment.maxGrade,
              description: assignment.description,
            }
          : item
      ),
    }));
  };

  const deleteAssignment = (assignmentId: number) => {
    setState((prev) => ({
      ...prev,
      assignments: prev.assignments.filter((assignment) => assignment.id !== assignmentId),
    }));
  };

  const markNotificationRead = (notificationId: number) => {
    setState((prev) => ({
      ...prev,
      notifications: prev.notifications.map((notification) =>
        notification.id === notificationId
          ? {
              ...notification,
              unread: false,
            }
          : notification
      ),
    }));
  };

  const markAllNotificationsRead = () => {
    setState((prev) => ({
      ...prev,
      notifications: prev.notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    }));
  };

  const value = useMemo(
    () => ({
      state,
      completeLesson,
      submitAssignment,
      addCourse,
      addAssignment,
      updateCourse,
      deleteCourse,
      updateAssignment,
      deleteAssignment,
      markNotificationRead,
      markAllNotificationsRead,
    }),
    [state]
  );

  return <LmsContext.Provider value={value}>{children}</LmsContext.Provider>;
}

export function useLms() {
  const context = useContext(LmsContext);

  if (!context) {
    throw new Error("useLms must be used inside LmsProvider");
  }

  return context;
}
