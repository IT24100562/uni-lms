export type CourseStatus = "in_progress" | "almost_done" | "completed";

export interface Course {
  id: number;
  title: string;
  code: string;
  instructor: string;
  credits: number;
  schedule: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  enrolled: number;
  rating: number;
  status: CourseStatus;
  color: string;
  tag: string;
  nextLesson: string;
}

export type AssignmentStatus = "pending" | "submitted" | "overdue" | "graded";
export type AssignmentPriority = "high" | "medium" | "low";

export interface Assignment {
  id: number;
  title: string;
  courseCode: string;
  courseName: string;
  type: string;
  dueDate: string;
  dueTime: string;
  daysLeft: number;
  status: AssignmentStatus;
  priority: AssignmentPriority;
  maxGrade: number;
  grade: number | null;
  description: string;
}

export interface Activity {
  id: number;
  type: "completed" | "submitted" | "achievement" | "enrolled";
  title: string;
  description: string;
  time: string;
}

export interface Notification {
  id: number;
  type: "deadline" | "grade" | "course" | "announcement";
  title: string;
  desc: string;
  time: string;
  unread: boolean;
}

export interface LmsState {
  studentName: string;
  studentId: string;
  semesterLabel: string;
  week: number;
  totalWeeks: number;
  currentGpa: number;
  studyStreak: number;
  weeklyStudyTargetHours: number;
  weeklyStudyHours: number[];
  courses: Course[];
  assignments: Assignment[];
  activities: Activity[];
  notifications: Notification[];
}

export const initialLmsState: LmsState = {
  studentName: "CSCT Admissions",
  studentId: "RECRUITMENT-OFFICE",
  semesterLabel: "Academic Year 2026",
  week: 1,
  totalWeeks: 1,
  currentGpa: 0,
  studyStreak: 0,
  weeklyStudyTargetHours: 0,
  weeklyStudyHours: [0, 0, 0, 0, 0, 0, 0],
  courses: [],
  assignments: [],
  activities: [],
  notifications: [],
};
