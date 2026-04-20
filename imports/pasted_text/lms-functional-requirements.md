
FUNCTIONAL REQUIREMENTS DOCUMENT
University Learning Management System (LMS)

Product Name	University Learning Management System (LMS)
Document Type	Functional Requirements Document (FRD)
Version	1.0.0
Status	Draft – Under Review
Prepared By	Thurshikan Chief Operating Officer
Date Prepared	April 2026
Target Users	Students, Lecturers, Admin Staff, System Administrators
Confidentiality	Internal – Restricted Distribution

 
2. Document Modification History

Version	Date	Author	Description of Changes
1.0.0	April 2026	Product & Architecture Team	Initial document creation – full FRD for MVP scope
—	—	—	Pending stakeholder review and sign-off

 
3. Introduction
3.1 Purpose
This Functional Requirements Document (FRD) defines the complete functional specification for the University Learning Management System (LMS). It serves as the authoritative reference for product design, engineering implementation, QA validation, and stakeholder alignment throughout the development lifecycle.
The document covers all features, system behaviors, data entities, business rules, and non-functional requirements necessary for the engineering team to design and deliver a production-grade LMS platform.
3.2 Core Philosophy
Principle	Description
Simplicity First	Avoid unnecessary complexity. Every feature must solve a documented user problem.
Modular Architecture	System is composed of independent modules: Auth, Users, Courses, Assessments, Analytics.
Scalable by Design	Architecture supports thousands of concurrent users with horizontal scaling.
Data-First	All learning interactions are structured, stored, and queryable for analytics and audit.
Mobile-First UI	All interfaces are responsive and optimized for mobile and tablet devices.
Role-Based Access	Strict RBAC enforced at every layer — API, service, and UI level.
High Availability	System targets 99.9% uptime with automated failover and health monitoring.
3.3 Scope
In Scope
•	User authentication, roles, and profile management
•	Course creation, structuring, and publishing
•	Student enrollment and access control
•	Content delivery (video, PDF, documents)
•	Assignment creation and submission
•	Quizzes and timed exams with auto-grading
•	Grading system and gradebook
•	Attendance tracking
•	Notifications and announcements
•	Administrative dashboards and reporting
Out of Scope (Future Phases)
•	AI-driven course recommendations
•	Plagiarism detection engine
•	Integration with Zoom / Google Classroom
•	Native mobile application (React Native)
•	Live video streaming / virtual classrooms


3.4 Stakeholders
Stakeholder	Role	Interest
University Leadership	Executive Sponsor	Strategic alignment, ROI, and adoption metrics
IT / System Administrator	Technical Owner	System health, security, deployment, and integrations
Academic Registrar	Admin Staff	Enrollment management, academic calendar, and reporting
Lecturers / Instructors	Primary Content Creator	Course creation, content delivery, grading, and student performance
Students	Primary End User	Access learning materials, submit work, track academic progress
Product & Engineering Team	Implementation Owner	Build, test, and maintain the system to spec
3.5 Assumptions
•	University maintains a central directory (LDAP/AD) that can be integrated for SSO in later phases.
•	All academic content (videos, PDFs) is copyright-cleared and approved for digital distribution.
•	An institutional email domain is used for user identity verification.
•	Network infrastructure supports minimum 10 Mbps per concurrent video streaming user.
•	University provides AWS/GCP cloud accounts or equivalent for hosting.
•	Academic calendar, semester definitions, and grading policies are provided by the university administrator before setup.

 
4. Business Overview
4.1 Current State — Problems in Universities
Problem Area	Description	Impact
Fragmented Systems	Course materials distributed via email, USB drives, or disparate platforms with no central repository.	High — creates confusion, version inconsistency, and poor student experience.
Manual Enrollment	Students enrolled manually by admin staff using spreadsheets with no automated validation.	High — error-prone, labor-intensive, and delays course access.
No Digital Assessment	Assignments and exams submitted on paper or through generic email with no structured tracking.	Critical — no audit trail, difficult to grade at scale, no analytics.
Attendance Opacity	Attendance tracked on paper sheets, not digitized, making it unavailable for real-time reporting.	Medium — cannot trigger automated student support interventions.
Lack of Analytics	Lecturers and admin staff have no data on course completion, engagement, or student performance trends.	High — prevents proactive academic intervention.
No Centralized Comms	Announcements sent via personal email with no targeting or delivery confirmation.	Medium — students miss critical academic deadlines and notices.
4.2 Desired State
•	A single centralized platform for all academic activities — content, assessment, grading, and communication.
•	Automated enrollment with role-based course access provisioned instantly.
•	Digital submission of assignments and exams with automatic timestamping and deadline enforcement.
•	Real-time attendance tracking accessible to lecturers and administrators.
•	Dashboards providing actionable academic performance insights for all stakeholders.
•	Structured announcements and notification system with delivery tracking.
4.3 Business Objectives
Objective	Target Metric	Timeline
Centralize academic content delivery	100% of courses on the LMS within 1 semester of launch	Phase 1
Reduce admin enrollment workload	80% reduction in manual enrollment effort	Phase 1
Digitize assessment workflows	All assignments submitted digitally with grading within the system	Phase 1–2
Improve student engagement	Achieve 70%+ weekly active user rate among enrolled students	Phase 2
Enable data-driven teaching	Lecturers access performance dashboards within Phase 2 launch	Phase 2
Academic continuity assurance	99.9% platform availability during exam and submission periods	Phase 1
 
5. Solution Overview
5.1 High-Level Description
The University LMS is a web-based, role-aware academic platform that centralizes course management, content delivery, student assessments, grading, and communication. It is designed as a Modular Monolith that is Microservices-ready, enabling the system to scale incrementally without a full re-architecture.
The platform is accessed via a responsive web application and, in a later phase, a native mobile application. All user interactions generate structured audit and analytics data, enabling academic reporting at individual, course, and institutional levels.
5.2 Technology Architecture
Layer	Technology	Rationale
Backend Framework	Spring Boot 3.x (Java 21)	Enterprise-grade, mature ecosystem, modular monolith with microservices migration path.
Frontend Framework	React 18 + TypeScript + Vite	Type-safe, component-driven UI with strong ecosystem. Next.js optional for SSR/SEO.
Mobile (Phase 3)	React Native (Expo)	Cross-platform mobile with code sharing from web React components.
Primary Database	PostgreSQL 16	ACID-compliant, relational, proven at scale. Supports JSON columns for flexible metadata.
Caching Layer	Redis 7	Session management, rate limiting, and query result caching.
File Storage	AWS S3 (or MinIO self-hosted)	Scalable blob storage for videos, PDFs, and submission files with pre-signed URLs.
Video Streaming	AWS CloudFront + S3 (HLS)	CDN-based adaptive bitrate streaming. Vimeo/Mux as managed alternative.
Authentication	JWT (Access + Refresh Tokens) + OAuth2	Stateless auth with Google OAuth support. Spring Security integration.
API Design	RESTful APIs (OpenAPI 3.0 spec)	Standard REST with versioning (/api/v1/). GraphQL considered for Phase 3 analytics.
Search	PostgreSQL Full-Text Search (Phase 1), Elasticsearch (Phase 3)	Scalable content and course search.
Message Queue	RabbitMQ / AWS SQS	Async processing for notifications, email, and report generation.
Email / Push Notifications	AWS SES + Firebase Cloud Messaging	Reliable transactional email and push notification delivery.
Containerization	Docker + Docker Compose	Reproducible environments across dev, staging, and production.
CI/CD Pipeline	GitHub Actions + ArgoCD	Automated testing, build, and deployment pipeline.
Hosting & Infrastructure	AWS ECS Fargate (or GCP Cloud Run)	Serverless containers with auto-scaling. RDS for managed PostgreSQL.
Monitoring & Logging	AWS CloudWatch + Datadog / Grafana	Real-time metrics, distributed tracing, and centralized log aggregation.
API Gateway	AWS API Gateway / Kong	Rate limiting, request routing, and API versioning management.
5.3 Architecture Diagram (Logical)
[ Browser / Mobile Client ]
        ↓  HTTPS
[ API Gateway / Load Balancer ]
        ↓
[ Spring Boot Application (Modular Monolith) ]
  ├── Auth Module          ← JWT / OAuth2
  ├── User Module          ← RBAC, profiles
  ├── Course Module        ← Courses, modules, lessons
  ├── Enrollment Module    ← Enrollment management
  ├── Content Module       ← File/video delivery via S3
  ├── Assessment Module    ← Assignments, quizzes, exams
  ├── Grading Module       ← Gradebook, GPA
  ├── Attendance Module    ← Session attendance
  ├── Notification Module  ← Email, push, in-app
  └── Analytics Module     ← Reports, dashboards
        ↓
[ PostgreSQL ] + [ Redis ] + [ AWS S3 ] + [ RabbitMQ ]

 
6. Core Data Entities
The following are the primary data entities in the LMS. All entities include standard audit fields: created_at, updated_at, created_by, is_deleted (soft delete).

Entity	Key Attributes	Relationships
users	id, first_name, last_name, email, password_hash, role, status, profile_picture_url, phone, department_id, created_at	Has many enrollments, submissions, attendance records. Belongs to role.
roles	id, name (SUPERADMIN, ADMIN, LECTURER, STUDENT), permissions[]	Assigned to users. Controls system access.
departments	id, name, code, faculty, head_lecturer_id	Groups courses and users by academic department.
courses	id, title, code, description, department_id, lecturer_id, status (DRAFT/PUBLISHED/ARCHIVED), start_date, end_date, max_students, thumbnail_url	Has many modules, enrollments, assignments, announcements.
modules	id, course_id, title, order_index, description, is_published	Belongs to course. Has many lessons.
lessons	id, module_id, title, content_type (VIDEO/PDF/TEXT), content_url, duration_minutes, order_index, is_published	Belongs to module. Tracked by lesson_progress.
enrollments	id, student_id, course_id, enrolled_at, status (ACTIVE/COMPLETED/DROPPED), enrolled_by	Links students to courses. Required for content access.
lesson_progress	id, student_id, lesson_id, status (NOT_STARTED/IN_PROGRESS/COMPLETED), last_accessed_at, completion_percentage	Tracks per-student lesson progress.
assignments	id, course_id, module_id, title, description, due_date, max_marks, allow_late_submission, submission_type (FILE/TEXT/URL)	Belongs to course. Has many submissions.
submissions	id, assignment_id, student_id, submitted_at, file_url, text_content, status (SUBMITTED/GRADED/LATE), marks_obtained, feedback, graded_by, graded_at	Belongs to assignment and student.
quizzes	id, course_id, title, instructions, time_limit_minutes, max_attempts, start_time, end_time, is_randomized	Belongs to course. Has many questions.
questions	id, quiz_id, question_text, question_type (MCQ/TRUE_FALSE/SHORT_ANSWER), marks, order_index	Belongs to quiz. Has many options.
question_options	id, question_id, option_text, is_correct	MCQ options. is_correct drives auto-grading.
quiz_attempts	id, quiz_id, student_id, started_at, submitted_at, score, status (IN_PROGRESS/SUBMITTED/TIMED_OUT)	Per-student quiz attempt. Has many responses.
quiz_responses	id, attempt_id, question_id, selected_option_id, text_response, is_correct, marks_awarded	Per-question response within an attempt.
grades	id, student_id, course_id, component_type (ASSIGNMENT/QUIZ/EXAM/ATTENDANCE), reference_id, marks_obtained, max_marks, weight_percentage	Aggregated for gradebook and GPA.
attendance_sessions	id, course_id, lecturer_id, session_date, session_title, status (OPEN/CLOSED)	A class session for attendance marking.
attendance_records	id, session_id, student_id, status (PRESENT/ABSENT/LATE/EXCUSED), marked_at, marked_by	Per-student attendance record per session.
announcements	id, course_id, author_id, title, content, is_pinned, published_at, target_role	Course or system-wide announcements.
notifications	id, user_id, type, title, message, reference_id, is_read, sent_at, channel (EMAIL/PUSH/IN_APP)	User notification inbox.
audit_logs	id, user_id, action, entity_type, entity_id, ip_address, user_agent, timestamp, payload_snapshot	Immutable system audit trail.
 
7. Functional Requirements
Requirements are classified by priority as follows:
Priority	Label	Definition
P1	Critical	Must be delivered in MVP. System cannot launch without this.
P2	High	Required for Phase 2. Core user value but not launch-blocking.
P3	Medium	Phase 3 or optimization feature. Improves UX or operations.
P4	Low	Nice-to-have. Deferred to future roadmap.

7.1 Cross-Cutting Features
7.1.1 Authentication
ID	Priority	Requirement	Notes / Acceptance Criteria
AUTH-01	P1-Critical	Users shall log in using email and password. Passwords must be hashed using bcrypt (min cost factor 12).	Login fails with generic error message (no user enumeration). Lockout after 5 failed attempts.
AUTH-02	P1-Critical	System shall issue a JWT access token (15-minute expiry) and a refresh token (7-day expiry) on successful login.	Refresh token is stored HTTP-only. Tokens are invalidated on logout.
AUTH-03	P1-Critical	Users shall be able to reset their password via a time-limited (1-hour) email token link.	Reset link expires after 1 hour or first use.
AUTH-04	P2-High	System shall support Google OAuth 2.0 login using institutional email domain restriction.	Only emails matching the configured university domain are accepted.
AUTH-05	P1-Critical	All API endpoints (except /auth/*) shall require a valid JWT bearer token.	401 Unauthorized returned for missing or invalid tokens.
AUTH-06	P2-High	System shall enforce multi-factor authentication (TOTP/email OTP) for Admin and Superadmin roles.	MFA can be enforced system-wide via admin configuration.
7.1.2 Role-Based Access Control (RBAC)
ID	Priority	Requirement	Notes / Acceptance Criteria
RBAC-01	P1-Critical	System shall define four roles: SUPERADMIN, ADMIN, LECTURER, STUDENT. Each role has a distinct permission set.	Roles enforced at API layer (Spring Security). No UI-only restrictions.
RBAC-02	P1-Critical	Permission checks shall be enforced server-side on every API call. Frontend role-based rendering is supplementary only.	A student calling a lecturer-only endpoint receives 403 Forbidden.
RBAC-03	P1-Critical	SUPERADMIN has unrestricted access. ADMIN manages users and courses within their department. LECTURER manages their own courses. STUDENT accesses enrolled courses only.	Permissions are non-negotiable and cannot be self-escalated.
RBAC-04	P2-High	System shall support custom permission overrides per user (e.g., a student granted TA access to one course).	Overrides are logged in audit_logs and require ADMIN approval.
7.1.3 Search & Filtering
ID	Priority	Requirement	Notes / Acceptance Criteria
SRCH-01	P1-Critical	Users shall be able to search courses by title, code, and department from a global search bar.	Full-text search with results ranked by relevance. Returns results within 500ms.
SRCH-02	P2-High	Course list shall support filtering by department, status, semester, and lecturer.	Filters are combinable. URL-persisted query parameters.
SRCH-03	P3-Medium	Students shall be able to search within course content (lesson titles, assignment names).	Scoped to enrolled courses only.

7.2 User Management
ID	Priority	Requirement	Notes / Acceptance Criteria
USR-01	P1-Critical	SUPERADMIN and ADMIN shall be able to create, edit, deactivate, and delete user accounts.	Deleted accounts are soft-deleted. Email and ID are preserved for audit trail.
USR-02	P1-Critical	User creation must require: first name, last name, institutional email, role, and department assignment.	Email must be unique. System sends a welcome email with temporary password.
USR-03	P1-Critical	All users shall be able to view and edit their own profile: name, phone, profile picture, and password.	Cannot change own email or role without ADMIN approval.
USR-04	P1-Critical	System shall support bulk user import via CSV upload (ADMIN role).	CSV format validated before import. Errors listed with row reference. Max 1,000 users per batch.
USR-05	P2-High	ADMIN shall be able to view a paginated, searchable user list with filters for role, department, and status.	Supports export to CSV for offline reporting.
USR-06	P2-High	System shall display a user's academic summary: enrolled courses, attendance rate, average grade, pending submissions.	Accessible to ADMIN and the student themselves.
USR-07	P1-Critical	Deactivated accounts shall immediately lose API access. Active sessions are invalidated.	All JWT tokens for the user are blocklisted on deactivation.

7.3 Course Management
ID	Priority	Requirement	Notes / Acceptance Criteria
CRS-01	P1-Critical	LECTURER and ADMIN shall be able to create a new course with: title, code, description, department, max students, start/end date, and thumbnail.	Course code must be unique within a department and semester.
CRS-02	P1-Critical	Courses shall follow a publishing workflow: DRAFT → PUBLISHED → ARCHIVED. Students can only access PUBLISHED courses.	LECTURER publishes their own course. ADMIN can publish any course.
CRS-03	P1-Critical	Each course shall be structured into Modules. Each module contains ordered Lessons.	Modules and lessons can be reordered via drag-and-drop (frontend). Order stored as integer index.
CRS-04	P1-Critical	LECTURER shall be able to add, edit, reorder, and delete modules and lessons within their course.	Deleting a lesson soft-deletes it. Student progress on deleted lessons is preserved.
CRS-05	P2-High	LECTURER shall be able to duplicate an existing course as a new draft, copying all modules, lessons, and assignment templates (without student data).	Duplicated course prefixed with 'Copy of'. Enrollments not carried over.
CRS-06	P1-Critical	Archived courses shall be read-only. No new enrollments, submissions, or grade changes permitted on archived courses.	Existing student data remains accessible for historical reference.
CRS-07	P2-High	System shall support co-lecturer assignment — a secondary LECTURER with edit access to a course.	Co-lecturer cannot archive or delete the course.

7.4 Enrollment System
ID	Priority	Requirement	Notes / Acceptance Criteria
ENR-01	P1-Critical	ADMIN shall be able to manually enroll one or more students into a course.	Enrollment creates an enrollment record with status ACTIVE and triggers a notification to the student.
ENR-02	P1-Critical	ADMIN shall be able to bulk enroll students from a CSV file into a specified course.	Errors (invalid student ID, course full) are reported per row.
ENR-03	P2-High	Students shall be able to self-enroll in courses marked as 'open enrollment' if capacity allows.	Self-enrollment requires the student to be ACTIVE and not already enrolled.
ENR-04	P1-Critical	A student must have an ACTIVE enrollment record to access any content, submit assignments, or take quizzes within a course.	403 Forbidden returned if enrollment check fails.
ENR-05	P1-Critical	Maximum enrollment capacity shall be enforced. Enrollment requests beyond capacity are rejected with a clear error message.	Capacity is set at course creation. ADMIN can override.
ENR-06	P2-High	ADMIN shall be able to drop a student from a course. Dropped students lose access and their status changes to DROPPED.	Dropped students' existing submissions and grades are retained for record.
ENR-07	P2-High	System shall support a waitlist for full courses. When a spot opens, the first waitlisted student is notified automatically.	Waitlist position is visible to the student.

7.5 Content Delivery
ID	Priority	Requirement	Notes / Acceptance Criteria
CNT-01	P1-Critical	LECTURER shall be able to upload lesson content: videos (MP4, max 2GB), PDFs (max 50MB), and links to external URLs.	Files are stored in AWS S3. Access is controlled via pre-signed URLs (15-minute expiry).
CNT-02	P1-Critical	Video content shall be served via CDN with adaptive bitrate streaming (HLS). Direct S3 URL access shall be blocked.	Videos not downloadable by default. Downloading requires explicit LECTURER setting.
CNT-03	P1-Critical	System shall track per-student lesson progress: NOT_STARTED, IN_PROGRESS, COMPLETED.	Progress updated when student reaches 80% video completion or scrolls through PDF to last page.
CNT-04	P1-Critical	Students can only access lessons in published modules within their enrolled course.	Unpublished lessons are not returned in API responses for STUDENT role.
CNT-05	P2-High	LECTURER shall be able to set prerequisites — a lesson is locked until a prior lesson is marked COMPLETED.	Lock state enforced server-side, not only in UI.
CNT-06	P2-High	System shall display estimated reading/viewing time for each lesson.	Calculated from video duration or PDF page count (avg 2 min/page).
CNT-07	P3-Medium	Students shall be able to bookmark lessons and add personal notes (private, not visible to lecturer).	Notes stored per student per lesson. Exported in student's academic data export.

7.6 Assignment Module
ID	Priority	Requirement	Notes / Acceptance Criteria
ASN-01	P1-Critical	LECTURER shall be able to create assignments with: title, description, due date/time, max marks, and submission type (FILE, TEXT, or URL).	Assignment is linked to a course and optionally to a specific module.
ASN-02	P1-Critical	Students shall be able to submit their assignment before the deadline. System shall timestamp the submission at server time.	Student receives confirmation notification on successful submission.
ASN-03	P1-Critical	Submissions past the deadline shall be automatically flagged as LATE. System records the exact lateness duration.	LECTURER can configure whether late submissions are accepted.
ASN-04	P1-Critical	LECTURER shall be able to download all submissions for an assignment in bulk (ZIP archive).	ZIP organized by student name/ID.
ASN-05	P1-Critical	LECTURER shall be able to grade each submission: enter marks, written feedback, and an optional attachment (rubric/annotated file).	Graded status and marks update the student's gradebook record.
ASN-06	P2-High	Students shall be able to view their graded submission: marks, feedback, and LECTURER annotation.	Marks are only visible after LECTURER publishes grades.
ASN-07	P2-High	LECTURER shall be able to reopen a submission for resubmission with a new deadline.	Resubmission creates a new submission record. Previous version archived.
ASN-08	P2-High	System shall enforce file type restrictions and maximum file size per assignment (configured by lecturer).	Unsupported file types rejected at upload with user-friendly error.

7.7 Quiz & Exam Module
ID	Priority	Requirement	Notes / Acceptance Criteria
QUZ-01	P2-High	LECTURER shall be able to create a quiz/exam with: title, instructions, time limit, max attempts, availability window (start/end datetime), and question randomization toggle.	Quiz not visible to students before start_time.
QUZ-02	P2-High	System shall support question types: Multiple Choice (MCQ), True/False, and Short Answer.	MCQ and True/False are auto-graded. Short Answer requires manual LECTURER grading.
QUZ-03	P2-High	Once a student starts a quiz attempt, the timer starts and cannot be paused. On timeout, the attempt is auto-submitted with answers recorded.	Timeout submission is treated the same as a manual submission.
QUZ-04	P2-High	System shall auto-calculate scores for MCQ and True/False questions immediately on submission.	Score visible to student after submission (configurable delay by LECTURER).
QUZ-05	P2-High	LECTURER shall be able to configure a question bank and randomly select a subset of questions per student attempt.	Ensures question variety across attempts and reduces answer sharing.
QUZ-06	P2-High	System shall enforce the max attempts limit. Students cannot start a new attempt if the limit is reached.	Remaining attempts shown to student before starting.
QUZ-07	P3-Medium	LECTURER shall be able to review individual student attempts, see per-question responses, and manually override auto-graded scores.	Override is logged with a reason field.
QUZ-08	P3-Medium	System shall detect and flag suspicious activity: tab switching, copy-paste in text fields, and rapid answer changes.	Flags are visible in the LECTURER's exam review panel. Not auto-penalized.

7.8 Grading System
ID	Priority	Requirement	Notes / Acceptance Criteria
GRD-01	P2-High	System shall maintain a gradebook per student per course, aggregating grades from: assignments, quizzes, exams, and attendance.	Gradebook visible to the enrolled student and the course LECTURER.
GRD-02	P2-High	LECTURER shall be able to configure grade weightings per component type (e.g., Assignments 40%, Quizzes 20%, Final Exam 40%).	Weights must sum to 100%. System validates on save.
GRD-03	P2-High	System shall auto-calculate a student's current weighted average as grades are entered.	Formula: Σ (component_score / max_score × weight). Displayed to 2 decimal places.
GRD-04	P2-High	System shall map numerical grades to letter grades using a configurable grading scale defined by ADMIN.	Default scale: A (90-100), B (80-89), C (70-79), D (60-69), F (<60). Configurable per department.
GRD-05	P3-Medium	System shall compute a basic GPA per student per semester using the configured grade-point mapping.	GPA formula: Σ (grade_points × course_credits) / Σ credits. Displayed on student academic summary.
GRD-06	P2-High	LECTURER shall be able to publish or hide grades per assessment. Unpublished grades not visible to students.	Batch publish option available for all grades in an assignment.
GRD-07	P3-Medium	ADMIN shall be able to export the full grade report for a course or semester as CSV or PDF.	Report includes student ID, name, per-component grades, final grade, and letter grade.

7.9 Attendance Tracking
ID	Priority	Requirement	Notes / Acceptance Criteria
ATN-01	P2-High	LECTURER shall be able to create an attendance session for a course with: date, session title, and open/close status.	Session cannot be reopened once CLOSED.
ATN-02	P2-High	LECTURER shall be able to mark each enrolled student's attendance as: PRESENT, ABSENT, LATE, or EXCUSED.	Bulk mark-all-present button available for efficiency.
ATN-03	P2-High	Students shall be able to view their own attendance record per course: total sessions, attendance count, and percentage.	Percentage formula: (PRESENT + LATE) / total_sessions × 100.
ATN-04	P3-Medium	System shall trigger an automated alert when a student's attendance drops below a configurable threshold (default 75%).	Alert sent to student and optionally to their academic advisor.
ATN-05	P3-Medium	ADMIN shall be able to view attendance reports across all courses: by course, by lecturer, and by student.	Exportable as CSV.
ATN-06	P3-Medium	System shall support QR code-based attendance marking where students scan a session QR code to self-mark attendance.	QR code valid for a configurable window (5–15 minutes). Location validation optional.

7.10 Communication
ID	Priority	Requirement	Notes / Acceptance Criteria
COM-01	P1-Critical	LECTURER and ADMIN shall be able to create course announcements with: title, rich-text content, and pin-to-top toggle.	Pinned announcements appear at the top of the course feed.
COM-02	P1-Critical	Students enrolled in a course shall receive an in-app notification and email when a new announcement is published.	Email delivery within 2 minutes of publication. In-app notification real-time via WebSocket or polling.
COM-03	P2-High	System shall send automated notifications for: assignment deadlines (48h and 24h prior), quiz opening, grade publication, and enrollment confirmation.	Notification preferences configurable per user (email on/off, push on/off).
COM-04	P1-Critical	All users shall have a notification inbox showing unread count, message preview, and timestamp.	Mark-all-as-read available. Notifications auto-expire after 90 days.
COM-05	P3-Medium	System shall provide a course discussion forum where students and lecturers can post threads and reply.	Threaded replies. LECTURER can pin, lock, or delete threads. Moderation required.
COM-06	P3-Medium	System shall provide a direct messaging module for 1-to-1 communication between users within the same course context.	No cross-course messaging. Messages are not encrypted end-to-end but are stored securely.

7.11 Dashboards
ID	Priority	Requirement	Notes / Acceptance Criteria
DSH-01	P1-Critical	Student dashboard shall display: enrolled courses with progress %, upcoming deadlines (sorted by date), recent announcements, and unread notifications.	Dashboard loads within 2 seconds on standard broadband.
DSH-02	P1-Critical	Lecturer dashboard shall display: all courses owned, total enrolled students per course, pending submissions to grade, and recent student activity.	Counts are real-time. Pending submissions link directly to the grading view.
DSH-03	P2-High	Admin dashboard shall display: total users by role, active courses, enrollment summary, and system health indicators.	System health indicators: API uptime, error rate, and storage utilization.
DSH-04	P2-High	Each course shall have a course-level dashboard (accessible to LECTURER) showing: enrollment count, average grade, completion rate, and attendance rate.	Data refreshes every 15 minutes. Historical trend graphs for 8-week rolling window.
DSH-05	P3-Medium	SUPERADMIN shall have an institutional dashboard with cross-department KPIs: active users, course completion rates, and engagement trends.	Filterable by department and semester.

7.12 Reports & Analytics
ID	Priority	Requirement	Notes / Acceptance Criteria
RPT-01	P2-High	LECTURER shall be able to generate a Course Performance Report: per-student grade summary, average score per assessment, and grade distribution histogram.	Exportable as PDF and CSV.
RPT-02	P2-High	ADMIN shall be able to generate a Semester Summary Report: all courses, total enrollments, completion rates, and average grades.	Accessible to ADMIN and SUPERADMIN. Exportable as PDF.
RPT-03	P3-Medium	System shall generate a Student Academic Transcript: all completed courses, grades, letter grades, and GPA per semester.	Only accessible to the student and ADMIN. PDF format with official styling.
RPT-04	P3-Medium	System shall provide engagement analytics: lesson view counts, average time on content, quiz attempt rates.	Aggregated data, not individually identifiable in public views. Accessible to LECTURER for their courses.
RPT-05	P3-Medium	System shall support scheduled report delivery: ADMIN configures reports to be emailed on a defined schedule (weekly/monthly).	Reports generated asynchronously and emailed as PDF attachments.

7.13 System Business Rules
The following rules are enforced by the system at the service layer and are not bypassable through the UI:

Rule ID	Rule	Enforcement Point
BR-01	A student must have an ACTIVE enrollment record to access any content, submit work, or take quizzes in a course.	Course content API, submission API, quiz start API.
BR-02	Submissions past the configured deadline are automatically tagged LATE. Late submissions are blocked if allow_late_submission is false.	Submission API — deadline checked at server timestamp.
BR-03	A quiz attempt timer starts server-side at first access. Client-side timer is display-only. Timeout triggers auto-submission.	Quiz attempt service. Auto-submit job via scheduler.
BR-04	Grade weights per course must sum to exactly 100% before the gradebook is activated.	Grading module — validation on weight configuration save.
BR-05	Archived courses are read-only. No new enrollments, submissions, grade edits, or announcements are permitted.	All write APIs check course status before processing.
BR-06	Course enrollment cannot exceed the configured max_students. Requests beyond capacity are rejected unless ADMIN overrides.	Enrollment API — capacity check before record creation.
BR-07	A user's JWT access is invalidated immediately upon account deactivation. Active sessions are blocklisted in Redis.	Auth middleware — token blocklist check on every request.
BR-08	All file uploads are scanned for malware via AWS Macie or ClamAV before storage is confirmed.	File upload service — async scan. File unavailable until scan passes.
BR-09	Audit logs are immutable. No API exists to update or delete audit_log records.	Audit log table has no UPDATE/DELETE API. DB-level row-level security.
BR-10	Notification preferences are user-controlled but system-critical notifications (account deactivation, security alerts) are always delivered regardless of preference.	Notification service — bypass preference check for critical types.
 
8. Non-Functional Requirements
Category	Requirement	Target / Standard
Security — Auth	All passwords hashed with bcrypt (cost ≥ 12). JWT tokens signed with RS256.	OWASP ASVS Level 2 compliance.
Security — Transport	All API and web traffic served over TLS 1.2+. HTTP requests redirected to HTTPS.	A+ rating on SSL Labs.
Security — Data	PII fields encrypted at rest (AES-256). S3 buckets private with pre-signed URL access only.	AWS encryption at rest enabled for all storage.
Security — API	Rate limiting enforced: 100 req/min per authenticated user. 20 req/min for anonymous.	429 Too Many Requests returned when exceeded.
Security — Audit	All data mutations (create, update, delete) logged to audit_logs with user, timestamp, and payload snapshot.	Logs retained for minimum 7 years per academic compliance.
Performance	API response time P95 ≤ 300ms for standard read queries under normal load.	Load tested with 1,000 concurrent users.
Performance — Video	Video content served via CDN. First frame render within 3 seconds on 10 Mbps connection.	HLS adaptive bitrate streaming enabled.
Scalability	Application layer horizontally scalable via container orchestration. Stateless service design (session in Redis).	Auto-scaling triggers at 70% CPU. Scales to 10x baseline within 3 minutes.
Availability	System availability target: 99.9% uptime (≤ 8.7 hours downtime/year).	Measured via external uptime monitoring. SLA enforced for exam periods.
Availability — Recovery	Recovery Time Objective (RTO): ≤ 1 hour. Recovery Point Objective (RPO): ≤ 15 minutes.	Automated DB snapshots every 15 minutes. Multi-AZ deployment.
Usability	All interfaces must conform to WCAG 2.1 Level AA accessibility standards.	Tested with screen readers and keyboard-only navigation.
Usability — Mobile	Responsive UI supporting screens from 320px (mobile) to 2560px (4K desktop).	Tested on iOS Safari, Android Chrome, and major desktop browsers.
Maintainability	Codebase coverage ≥ 80% (unit tests). Integration test suite for all critical paths.	CI pipeline blocks merge on test failure or coverage drop.
Maintainability — Docs	All APIs documented via OpenAPI 3.0 spec. Docs auto-generated and versioned with code.	Swagger UI available at /api/docs. No undocumented endpoints.
Compliance	FERPA compliance for student education records. Data subject deletion supported (GDPR-aligned).	Legal review completed before launch. Data export endpoint available.
 
9. Data Management & Audit
9.1 Data Storage
•	All structured data stored in PostgreSQL with normalized schemas and foreign key constraints.
•	Soft deletes used for all user-facing entities. Hard deletes restricted to SUPERADMIN only, with mandatory audit log entry.
•	All tables include: id (UUID), created_at, updated_at, created_by, is_deleted, deleted_at.
•	Database migrations managed via Flyway. Migration files versioned and never modified retroactively.
9.2 File Handling
•	All user-uploaded files stored in AWS S3 in a private bucket with no public access.
•	Files organized by: /{env}/{entity_type}/{entity_id}/{filename_with_uuid}.
•	Pre-signed URLs generated server-side with 15-minute expiry for secure content delivery.
•	File size limits enforced at API layer before upload initiation (fail-fast).
•	Virus scan (ClamAV or AWS Macie) executed asynchronously. File marked unavailable until scan completes.
9.3 Backup & Recovery
•	Automated daily full backup and continuous WAL (Write-Ahead Log) archiving for PostgreSQL via AWS RDS.
•	S3 versioning enabled. Deleted objects recoverable within 30-day retention window.
•	Backup restoration tested quarterly via automated restoration drill.
9.4 Audit Logging
•	Every data-modifying API call generates an audit_log record: actor, action, entity, timestamp, and a JSON snapshot of the before/after state.
•	Audit logs are append-only. No UPDATE or DELETE operations permitted on the audit_logs table.
•	Audit log retention: minimum 7 years. Archived to cold storage (AWS S3 Glacier) after 2 years.
•	SUPERADMIN can query audit logs via a secure admin panel with filtering by user, entity, date range, and action type.
 
10. Risks & Mitigations
Risk ID	Risk Description	Likelihood	Impact	Mitigation Strategy
RSK-01	High concurrent load during exam periods causes API degradation or downtime.	High	Critical	Auto-scaling configured. Load tested at 3x peak. CDN offloads static and video content. Exam schedules known in advance for proactive scaling.
RSK-02	Student data breach due to misconfigured S3 buckets or insecure API.	Medium	Critical	All S3 buckets private. API security audited pre-launch. Penetration test before go-live. WAF rules enabled.
RSK-03	Lecturer adoption resistance due to unfamiliar interface.	High	High	UX research incorporated in design. Admin-managed onboarding program. In-app guided tours. Dedicated helpdesk.
RSK-04	Data loss due to database corruption or accidental deletion.	Low	Critical	RDS Multi-AZ deployment. Automated 15-minute backups. RPO 15 minutes, RTO 1 hour. Quarterly recovery drills.
RSK-05	Scope creep delays MVP launch beyond academic semester deadline.	High	High	Strict phase-gating in roadmap. P1 requirements locked before sprint start. Change requests require PM approval and go to next phase.
RSK-06	Plagiarism in digital assignment submissions due to lack of detection.	High	Medium	Phase 1 mitigated by file timestamping and submission uniqueness flagging. Full plagiarism detection integrated in a later phase.
RSK-07	Third-party service outage (AWS, email provider) impacts core functionality.	Low	High	AWS multi-region for critical services. Fallback SMTP provider configured. Graceful degradation — core LMS functions remain available if notifications fail.
RSK-08	Regulatory non-compliance (FERPA / local data privacy laws).	Medium	Critical	Legal review completed pre-launch. Data residency configuration available. Student data export and deletion endpoints implemented.
 
11. MVP Acceptance Criteria
The following criteria must be met for the MVP (Phase 1) to be considered ready for production launch:

AC-ID	Feature Area	Acceptance Criterion
AC-01	Authentication	Users can register, log in, and log out. Password reset flow functional via email link. JWT token lifecycle correctly enforced.
AC-02	RBAC	All four roles (SUPERADMIN, ADMIN, LECTURER, STUDENT) can log in and access only their permitted endpoints. Role escalation attempts return 403.
AC-03	User Management	ADMIN can create, deactivate, and bulk import users. All users can update their own profile. Deactivated user access is immediately revoked.
AC-04	Course Management	LECTURER can create a course, add modules and lessons, and publish the course. Published course is visible to enrolled students. Draft course is not.
AC-05	Enrollment	ADMIN can enroll students manually and via CSV. Enrolled student gains immediate access to course content. Non-enrolled student receives 403.
AC-06	Content Delivery	LECTURER can upload a video and PDF to a lesson. Student can stream the video and download the PDF. Progress is tracked.
AC-07	Assignments	LECTURER can create an assignment with a deadline. Student can submit before deadline. Late submission is flagged. LECTURER can grade and provide feedback.
AC-08	Announcements	LECTURER can post an announcement. All enrolled students receive an email notification within 2 minutes. Announcement visible in course feed.
AC-09	Dashboard	Student dashboard displays enrolled courses, upcoming deadlines, and unread notifications. Lecturer dashboard shows courses and pending grades.
AC-10	Performance	P95 API response time ≤ 300ms under a load of 500 concurrent users. No critical errors in a 1-hour load test.
AC-11	Security	Penetration test passes with no Critical or High findings unresolved. All S3 content inaccessible without valid pre-signed URL.
AC-12	Browser Compatibility	Application functions correctly on: Chrome 120+, Firefox 120+, Safari 17+, and Edge 120+. Mobile responsive on iOS 16+ and Android 12+.
 
12. Sign-Off
By signing below, the stakeholders confirm they have reviewed and approved this Functional Requirements Document. Any changes post-sign-off require a formal change request and re-approval.

Role	Name	Signature	Date
University CIO / Sponsor			
Academic Registrar			
Lead Lecturer Representative			
Head of IT / System Administrator			
Product Manager			
Lead Software Architect			
 
13. Appendix: Phase Roadmap Summary
Phase	Timeline	Key Deliverables	Success Metric
Phase 1 — MVP	Months 1–3	Authentication & RBAC, User Management, Course Creation & Publishing, Enrollment System, Content Delivery (Video + PDF), Assignment Submission, Announcements, Student & Lecturer Dashboard.	System in production. All enrolled courses active on LMS. 80% lecturer adoption within 4 weeks of launch.
Phase 2 — Core Academic	Months 4–6	Quiz & Exam Module (MCQ + Timed), Grading System & Gradebook, Attendance Tracking, Automated Notifications (deadline, grade alerts), Course-Level Analytics Dashboard.	95% of assessments conducted digitally. Grading turnaround reduced by 60%. Zero missed exam deadlines due to system failure.
Phase 3 — Engagement & Scale	Months 7–10	Advanced Reporting & Transcripts, Discussion Forums, Direct Messaging, Mobile App (React Native), Elasticsearch-powered Search, Student Performance Alerts.	70% weekly active user rate. NPS ≥ 40. Mobile app ≥ 50% of student sessions.
Phase 4 — Intelligence & Integration	Months 11+	AI-Powered Course Recommendations, Plagiarism Detection Engine, Zoom / Google Meet Integration, Google Classroom data import, External LTI Tool Support.	AI recommendations drive 20% increase in course completion. Plagiarism incidents detectable within 24h of submission.

End of Document — University LMS Functional Requirements Document v1.0.0
