# Progress Tracking

Monitor how learners are progressing through your courses.

## Course Progress Overview

### Viewing Progress

**For all learners in a course:**
1. Go to the course → **Learners** tab
2. See progress percentage for each learner
3. Click a learner for detailed breakdown

**For a specific learner:**
1. Go to **Learners** (main navigation)
2. Click on a learner
3. Select the **Courses** tab
4. See progress per enrolled course

### Progress Calculation

Progress = (Completed lessons / Total lessons) × 100

A lesson is "completed" when:
- **Video** — Watched to end (or 90%+)
- **Document** — Opened/downloaded
- **Text** — Scrolled to bottom
- **Quiz** — Submitted (regardless of score)
- **Assignment** — Submitted

## Progress Details

Click a learner's course progress to see:

### Lesson-by-Lesson Status
- ✅ Completed
- 🔄 In Progress (started but not finished)
- ⬜ Not Started
- 🔒 Locked (prerequisites not met)

### Time Spent
How long the learner spent on each lesson.

### Quiz Scores
Score and attempt count for each quiz.

### Completion Date
When they finished (if applicable).

## Tracking Engagement

Beyond completion, track how engaged learners are:

### Video Engagement
- Play rate (started / enrolled)
- Average watch time
- Drop-off points
- Rewatch rate

### Quiz Performance
- Average score
- Questions missed most often
- Time to complete
- Attempts used

## Progress Reports

### Individual Learner Report
1. Click on a learner
2. Click **Export Report**
3. Download PDF or CSV

Includes:
- All courses and progress
- Quiz scores
- Time spent
- Certificates earned

### Course Progress Report
1. Go to course → **Analytics**
2. Click **Progress Report**
3. See all learners and their status

Export as CSV for further analysis.

### Bulk Progress Export
1. Go to **Analytics → Reports**
2. Click **Export All Progress**
3. Select date range and courses
4. Download CSV

## Completion Requirements

Configure what "completed" means for your course.

### All Lessons
Learner must complete every lesson (default).

### Required Lessons Only
Mark specific lessons as required; others are optional.

1. Go to course → **Settings → Completion**
2. Select **Custom Requirements**
3. Check which lessons are required
4. Click **Save**

### Quiz Passing Score
Require minimum quiz scores for completion.

1. Go to course → **Settings → Completion**
2. Enable **Require Passing Score**
3. Set minimum percentage (e.g., 80%)
4. Click **Save**

## Nudging Inactive Learners

### Manual Reminder
1. Go to course → **Learners**
2. Filter: Status = "In Progress", Last Active > 7 days ago
3. Select learners
4. Click **Send Reminder**

### Automated Reminders
1. Go to **Settings → Notifications → Reminders**
2. Enable **Inactivity Reminder**
3. Set trigger (e.g., 7 days inactive)
4. Customize message
5. Click **Save**

## Progress API (Business Plans)

Access progress data programmatically.

```
GET /api/v1/learners/{id}/progress

Response:
{
  "learner_id": "123",
  "courses": [
    {
      "course_id": "abc",
      "progress": 75,
      "started_at": "2026-01-15T10:00:00Z",
      "completed_at": null,
      "lessons_completed": 6,
      "lessons_total": 8
    }
  ]
}
```

See API documentation for full details.

---

*Related: [Managing Learners](./managing-learners.md) | [Analytics Dashboard](../analytics/dashboard-overview.md)*
