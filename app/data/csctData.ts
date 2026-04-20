export type CsctRole = "student" | "lecturer" | "admin";

export interface DashboardCourse {
  id: string;
  title: string;
  level: "HND" | "BSc" | "MSc";
  discipline: string;
  progress: number;
  nextLesson: string;
}

export interface DashboardAssignment {
  id: string;
  title: string;
  course: string;
  dueAt: string;
  status: "Pending" | "Submitted" | "Late";
  groupProject?: boolean;
}

export interface Announcement {
  id: string;
  title: string;
  text: string;
  postedAt: string;
  scope: "Faculty" | "Department" | "Internship";
}

export interface TimelineItem {
  id: string;
  title: string;
  detail: string;
  time: string;
}

export interface ModuleLesson {
  id: string;
  title: string;
  videoUrl: string;
  notesUrl: string;
  practicalTask: string;
  completed: boolean;
}

export interface WeekModule {
  id: string;
  title: string;
  lessons: ModuleLesson[];
}

export const studentCourses: DashboardCourse[] = [
  {
    id: "hnd-civil-1",
    title: "HND Civil Engineering",
    level: "HND",
    discipline: "Civil Engineering",
    progress: 72,
    nextLesson: "Concrete Mix Design for Tropical Conditions",
  },
  {
    id: "bsc-qs-1",
    title: "BSc Quantity Surveying",
    level: "BSc",
    discipline: "Quantity Surveying",
    progress: 58,
    nextLesson: "Rate Analysis and Cost Plan Revision",
  },
  {
    id: "msc-construction-1",
    title: "MSc Construction Management",
    level: "MSc",
    discipline: "Construction Management",
    progress: 44,
    nextLesson: "Lean Construction and Last Planner System",
  },
  {
    id: "hnd-cad-1",
    title: "HND AutoCAD and BIM",
    level: "HND",
    discipline: "Architectural Technology",
    progress: 81,
    nextLesson: "BIM Clash Detection Workflow",
  },
];

export const upcomingAssignments: DashboardAssignment[] = [
  {
    id: "as-1",
    title: "Structural Drawing Pack - Slab Reinforcement",
    course: "HND Civil Engineering",
    dueAt: "2026-04-18T23:00:00+05:30",
    status: "Pending",
  },
  {
    id: "as-2",
    title: "Bill of Quantities: Mixed-use Building",
    course: "BSc Quantity Surveying",
    dueAt: "2026-04-14T18:00:00+05:30",
    status: "Submitted",
    groupProject: true,
  },
  {
    id: "as-3",
    title: "Site Safety Observation Log",
    course: "MSc Construction Management",
    dueAt: "2026-04-10T20:00:00+05:30",
    status: "Late",
  },
];

export const announcements: Announcement[] = [
  {
    id: "an-1",
    title: "CSCT Industry Day 2026",
    text: "Internship partner interviews open next Monday. Upload your updated CV and site portfolio.",
    postedAt: "2h ago",
    scope: "Faculty",
  },
  {
    id: "an-2",
    title: "AutoCAD Lab Upgrade",
    text: "New workstation images with Revit and Navisworks will be available from week 9.",
    postedAt: "Yesterday",
    scope: "Department",
  },
  {
    id: "an-3",
    title: "Internship Weekly Log Reminder",
    text: "All industrial trainees must complete weekly logs before Friday 5.00 PM.",
    postedAt: "Today",
    scope: "Internship",
  },
];

export const activityTimeline: TimelineItem[] = [
  {
    id: "tl-1",
    title: "Submitted site inspection checklist",
    detail: "MSc Construction Management",
    time: "08:35",
  },
  {
    id: "tl-2",
    title: "Completed lesson: BIM model federation",
    detail: "HND AutoCAD and BIM",
    time: "Yesterday",
  },
  {
    id: "tl-3",
    title: "Supervisor feedback received",
    detail: "Industrial Training",
    time: "2 days ago",
  },
  {
    id: "tl-4",
    title: "Attendance validated",
    detail: "Semester week 8",
    time: "3 days ago",
  },
];

export const moduleWeeks: WeekModule[] = [
  {
    id: "wk-1",
    title: "Week 1 - Foundation Engineering",
    lessons: [
      {
        id: "ls-1",
        title: "Soil Bearing Capacity Basics",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        notesUrl: "#",
        practicalTask: "Inspect a local site and document soil profile assumptions.",
        completed: true,
      },
      {
        id: "ls-2",
        title: "Shallow vs Deep Foundations",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        notesUrl: "#",
        practicalTask: "Create a comparison sheet for two real Sri Lankan project cases.",
        completed: false,
      },
    ],
  },
  {
    id: "wk-2",
    title: "Week 2 - Reinforced Concrete Detailing",
    lessons: [
      {
        id: "ls-3",
        title: "Beam and Slab Reinforcement Detailing",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        notesUrl: "#",
        practicalTask: "Prepare AutoCAD reinforcement detail sheet with annotation standards.",
        completed: false,
      },
      {
        id: "ls-4",
        title: "Bar Bending Schedule Workshop",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        notesUrl: "#",
        practicalTask: "Generate a bar bending schedule from provided structural drawings.",
        completed: false,
      },
    ],
  },
  {
    id: "wk-3",
    title: "Week 3 - Construction Planning and Safety",
    lessons: [
      {
        id: "ls-5",
        title: "Method Statements and Risk Assessment",
        videoUrl: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
        notesUrl: "#",
        practicalTask: "Draft a method statement for slab casting with safety controls.",
        completed: false,
      },
    ],
  },
];

export const internshipWeeks = [
  {
    week: 1,
    site: "Colombo Port City - Mixed Development Zone",
    update: "Observed raft foundation prep and rebar spacing checks.",
    progress: 20,
    supervisor: "Good observation quality. Add photo annotations next week.",
  },
  {
    week: 2,
    site: "Kandy Flyover Extension",
    update: "Assisted quantity check for pile cap concrete volume.",
    progress: 43,
    supervisor: "Cross-check BOQ references before finalizing quantity sheets.",
  },
  {
    week: 3,
    site: "Galle Smart Campus",
    update: "Tracked MEP coordination conflicts in BIM review session.",
    progress: 61,
    supervisor: "Excellent BIM issue tracking and communication discipline.",
  },
];

export interface SupervisorFeedbackItem {
  id: string;
  week: number;
  supervisor: string;
  comment: string;
  rating: number;
  status: "Pending" | "Reviewed";
}

export interface SiteReportItem {
  id: string;
  title: string;
  week: number;
  type: "PDF" | "Image" | "Drawing";
  uploadedAt: string;
  size: string;
}

export const supervisorFeedback: SupervisorFeedbackItem[] = [
  {
    id: "sf-1",
    week: 1,
    supervisor: "Eng. N. Wickramasinghe",
    comment: "Good site observations. Add clearer reinforcement callouts to your notes.",
    rating: 4,
    status: "Reviewed",
  },
  {
    id: "sf-2",
    week: 2,
    supervisor: "Eng. R. Lakshan",
    comment: "Strong quantity validation, but cross-reference BOQ sections in the summary.",
    rating: 4,
    status: "Reviewed",
  },
  {
    id: "sf-3",
    week: 3,
    supervisor: "Eng. S. Fernando",
    comment: "Excellent BIM coordination issue reporting. Keep weekly risk notes concise.",
    rating: 5,
    status: "Pending",
  },
];

export const siteReports: SiteReportItem[] = [
  {
    id: "sr-1",
    title: "Week 1 Foundation Report",
    week: 1,
    type: "PDF",
    uploadedAt: "2026-03-09",
    size: "3.1 MB",
  },
  {
    id: "sr-2",
    title: "Pile Cap Progress Photos",
    week: 2,
    type: "Image",
    uploadedAt: "2026-03-16",
    size: "9.4 MB",
  },
  {
    id: "sr-3",
    title: "MEP Clash Markups - Level 4",
    week: 3,
    type: "Drawing",
    uploadedAt: "2026-03-23",
    size: "6.8 MB",
  },
];

export const groupProjects = [
  {
    id: "gp-1",
    team: "Team SteelFrame",
    project: "Construction Sequence Optimization",
    members: 5,
    progress: 67,
    tasksOpen: 4,
    files: 18,
    lastMessage: "Need final drone image set from site visit.",
  },
  {
    id: "gp-2",
    team: "Team SmartSite",
    project: "Digital Site Logbook Prototype",
    members: 4,
    progress: 52,
    tasksOpen: 7,
    files: 12,
    lastMessage: "API schema draft shared by backend member.",
  },
];

export interface TeamTask {
  id: string;
  teamId: string;
  title: string;
  owner: string;
  dueDate: string;
  status: "To do" | "In progress" | "Done";
}

export interface TeamFile {
  id: string;
  teamId: string;
  name: string;
  category: "Drawing" | "Report" | "Schedule";
  updatedAt: string;
}

export const teamTasks: TeamTask[] = [
  {
    id: "tsk-1",
    teamId: "gp-1",
    title: "Prepare crane lifting plan",
    owner: "Amaya",
    dueDate: "2026-04-17",
    status: "In progress",
  },
  {
    id: "tsk-2",
    teamId: "gp-1",
    title: "Finalize temporary works sequence",
    owner: "Nipun",
    dueDate: "2026-04-19",
    status: "To do",
  },
  {
    id: "tsk-3",
    teamId: "gp-2",
    title: "Integrate weather risk alerts",
    owner: "Tharushi",
    dueDate: "2026-04-16",
    status: "Done",
  },
  {
    id: "tsk-4",
    teamId: "gp-2",
    title: "Upload site log API documentation",
    owner: "Ravindu",
    dueDate: "2026-04-18",
    status: "In progress",
  },
];

export const teamSharedFiles: TeamFile[] = [
  {
    id: "tf-1",
    teamId: "gp-1",
    name: "Tower-A-Formwork-Sequence.dwg",
    category: "Drawing",
    updatedAt: "2026-04-11",
  },
  {
    id: "tf-2",
    teamId: "gp-1",
    name: "Site-Logistics-Plan-v3.pdf",
    category: "Report",
    updatedAt: "2026-04-12",
  },
  {
    id: "tf-3",
    teamId: "gp-2",
    name: "Digital-Logbook-Sprint-Board.xlsx",
    category: "Schedule",
    updatedAt: "2026-04-10",
  },
  {
    id: "tf-4",
    teamId: "gp-2",
    name: "BIM-Issue-Tracker.rvt",
    category: "Drawing",
    updatedAt: "2026-04-12",
  },
];

export const certifications = [
  {
    program: "HND Civil Engineering",
    completedCredits: 78,
    totalCredits: 96,
    certificateReady: false,
    next: "Complete internship capstone and final viva",
  },
  {
    program: "BSc Quantity Surveying",
    completedCredits: 112,
    totalCredits: 120,
    certificateReady: true,
    next: "Eligible for graduation and digital certificate generation",
  },
  {
    program: "MSc Construction Management",
    completedCredits: 30,
    totalCredits: 45,
    certificateReady: false,
    next: "Submit dissertation proposal and pass ethics review",
  },
];

export interface PracticalUpload {
  id: string;
  title: string;
  format: "DWG" | "PDF" | "RVT";
  module: string;
  status: "Submitted" | "Reviewing" | "Approved";
}

export interface FieldworkAssignment {
  id: string;
  title: string;
  location: string;
  dueDate: string;
  points: number;
}

export interface ConstructionSubmission {
  id: string;
  title: string;
  milestone: string;
  rubric: string;
  status: "Draft" | "Submitted" | "Graded";
}

export const practicalUploads: PracticalUpload[] = [
  {
    id: "pu-1",
    title: "Ground Floor Structural Layout",
    format: "DWG",
    module: "Reinforced Concrete Detailing",
    status: "Approved",
  },
  {
    id: "pu-2",
    title: "Retaining Wall Section Markups",
    format: "PDF",
    module: "Foundation Engineering",
    status: "Reviewing",
  },
  {
    id: "pu-3",
    title: "Site Coordination BIM Model",
    format: "RVT",
    module: "BIM Collaboration",
    status: "Submitted",
  },
];

export const fieldworkAssignments: FieldworkAssignment[] = [
  {
    id: "fw-1",
    title: "Concrete Pour Observation Report",
    location: "Port City Sector C",
    dueDate: "2026-04-18",
    points: 20,
  },
  {
    id: "fw-2",
    title: "Site Risk Matrix and Controls",
    location: "Kandy Flyover Yard",
    dueDate: "2026-04-22",
    points: 25,
  },
  {
    id: "fw-3",
    title: "Earthwork Productivity Study",
    location: "Galle Smart Campus",
    dueDate: "2026-04-24",
    points: 15,
  },
];

export const constructionSubmissions: ConstructionSubmission[] = [
  {
    id: "cs-1",
    title: "High-rise Formwork Strategy",
    milestone: "Design Submission",
    rubric: "Technical correctness, safety, sequencing",
    status: "Graded",
  },
  {
    id: "cs-2",
    title: "Digital Site Logbook Platform",
    milestone: "Sprint 2 Delivery",
    rubric: "Usability, data integrity, reporting",
    status: "Submitted",
  },
  {
    id: "cs-3",
    title: "Cost and Value Engineering Pack",
    milestone: "Final Presentation",
    rubric: "Commercial accuracy, feasibility",
    status: "Draft",
  },
];

export interface JourneyMilestone {
  id: string;
  stage: "HND" | "BSc" | "MSc";
  title: string;
  completed: boolean;
  targetTerm: string;
}

export interface JourneyEvent {
  id: string;
  date: string;
  title: string;
  detail: string;
}

export const academicPathway: JourneyMilestone[] = [
  {
    id: "jp-1",
    stage: "HND",
    title: "Complete core diploma modules",
    completed: true,
    targetTerm: "Year 1 - Semester 2",
  },
  {
    id: "jp-2",
    stage: "HND",
    title: "Industrial training pass",
    completed: true,
    targetTerm: "Year 2 - Semester 1",
  },
  {
    id: "jp-3",
    stage: "BSc",
    title: "Articulation entry approval",
    completed: false,
    targetTerm: "Year 2 - Semester 2",
  },
  {
    id: "jp-4",
    stage: "BSc",
    title: "Capstone project completion",
    completed: false,
    targetTerm: "Year 3 - Semester 2",
  },
  {
    id: "jp-5",
    stage: "MSc",
    title: "Research proposal defense",
    completed: false,
    targetTerm: "Year 4 - Semester 1",
  },
];

export const academicJourneyEvents: JourneyEvent[] = [
  {
    id: "je-1",
    date: "2025-06-12",
    title: "HND Year 1 Completed",
    detail: "Passed Structural Technology and Surveying Practice with merit.",
  },
  {
    id: "je-2",
    date: "2025-12-01",
    title: "Industrial Training Placement Confirmed",
    detail: "Assigned to Port City mixed-use superstructure package.",
  },
  {
    id: "je-3",
    date: "2026-03-28",
    title: "BSc Articulation Guidance Session",
    detail: "Academic panel reviewed credits and pathway options.",
  },
];

export interface IndustryOpportunity {
  id: string;
  company: string;
  role: string;
  location: string;
  closingDate: string;
}

export interface IndustryPartner {
  id: string;
  company: string;
  focus: string;
  contact: string;
}

export interface IndustryAnnouncement {
  id: string;
  title: string;
  body: string;
  postedAt: string;
}

export const industryOpportunities: IndustryOpportunity[] = [
  {
    id: "io-1",
    company: "Maga Engineering",
    role: "Site Engineering Intern",
    location: "Colombo",
    closingDate: "2026-04-20",
  },
  {
    id: "io-2",
    company: "Sanken Construction",
    role: "Planning and BIM Trainee",
    location: "Galle",
    closingDate: "2026-04-25",
  },
  {
    id: "io-3",
    company: "Access Engineering",
    role: "Quantity Surveying Intern",
    location: "Kandy",
    closingDate: "2026-04-22",
  },
];

export const industryPartners: IndustryPartner[] = [
  {
    id: "ip-1",
    company: "Maga Engineering",
    focus: "High-rise and mixed development delivery",
    contact: "placements@maga.lk",
  },
  {
    id: "ip-2",
    company: "Sanken Construction",
    focus: "Smart infrastructure and BIM operations",
    contact: "industryconnect@sanken.lk",
  },
  {
    id: "ip-3",
    company: "CML-MTD",
    focus: "Roads, bridges, and transport projects",
    contact: "careers@cmlmtd.lk",
  },
];

export const industryNews: IndustryAnnouncement[] = [
  {
    id: "in-1",
    title: "Contractor Networking Evening",
    body: "CSCT students can meet project directors from six partner companies this Friday.",
    postedAt: "Today",
  },
  {
    id: "in-2",
    title: "Internship Fast-Track Window Open",
    body: "Year 2 students with completed safety certification can apply for early intake placements.",
    postedAt: "Yesterday",
  },
  {
    id: "in-3",
    title: "Industry Webinar: Digital QA/QC",
    body: "Join the University of Salford and CSCT panel on digital quality assurance workflows.",
    postedAt: "2 days ago",
  },
];

export interface UkPartnership {
  id: string;
  institution: string;
  program: string;
  status: "Active" | "In Review";
}

export interface CertificationTracker {
  id: string;
  name: string;
  progress: number;
  requirement: string;
}

export const ukPartnerships: UkPartnership[] = [
  {
    id: "uk-1",
    institution: "University of Salford",
    program: "BSc (Hons) Top-up in Construction Management",
    status: "Active",
  },
  {
    id: "uk-2",
    institution: "University of Salford",
    program: "MSc Progression Pathway in Project Management",
    status: "Active",
  },
  {
    id: "uk-3",
    institution: "UK External Moderation Board",
    program: "Annual accreditation and quality assurance cycle",
    status: "In Review",
  },
];

export const certificationTrackers: CertificationTracker[] = [
  {
    id: "ct-1",
    name: "CSCT Site Safety Passport",
    progress: 88,
    requirement: "Complete hazard simulation and toolbox talk assessment",
  },
  {
    id: "ct-2",
    name: "BIM Coordinator Micro-Credential",
    progress: 63,
    requirement: "Submit clash detection report and model coordination review",
  },
  {
    id: "ct-3",
    name: "Professional Practice Readiness",
    progress: 54,
    requirement: "Pass internship viva and portfolio verification",
  },
];
