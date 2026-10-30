# TaskFlow: Kanban Task Board

A responsive Kanban board to manage tasks across **Todo**, **In Progress** and **Completed** columns. Built with React, Tailwind CSS and React Hook Form. It is a frontend-only app: tasks are saved in the browser's LocalStorage, so they survive a page refresh.

**Live Demo:** <your-live-link>
**Demo Video:** <your-video-link>

---

## Features

- **Add task** with title, description, priority (Low / Medium / High), due date and status
- **Edit and delete** any task (delete asks for confirmation)
- **Move tasks** between Todo, In Progress and Completed using the "Move to…" dropdown
- **Search** tasks by title (case-insensitive, updates as you type)
- **Filter** by priority and status; search and filters work together
- **Persistent data** using LocalStorage (tasks stay after refresh)
- **Responsive UI**
  - Desktop: 3 columns side by side
  - Tablet: 2 columns
  - Mobile: column tabs and a floating "Add task" button
- **UX states**
  - Empty state when there are no tasks
  - No-results state when search or filters match nothing
  - Form validation (title is required, maximum 80 characters)
- **Overdue highlight** for tasks past their due date

## Tech Stack

- React
- Tailwind CSS
- React Hook Form (form handling and validation)
- LocalStorage (data persistence)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Run locally

```bash

# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

## Project Structure

```
src/
├─ main.jsx
├─ App.jsx                 # connects hooks and components
├─ index.css               # Tailwind and theme colors
├─ constants/              # priorities, statuses, defaults
├─ utils/                  # pure functions
│  ├─ storage.js           # LocalStorage load and save
│  ├─ taskHelpers.js       # create, filter, group tasks, date helpers
│  └─ validation.js        # form validation rules
├─ hooks/                  # all state and logic
│  ├─ useTasks.js          # tasks state, add / update / delete / move
│  ├─ useFilters.js        # search and filter state
│  └─ useTaskModals.js     # form and delete modal state
└─ components/
   ├─ ui/                  # reusable components (Button, Input, Select, Modal...)
   └─ board/               # task-specific components (Navbar, Column, TaskCard...)
```

## How It Works

1. `useTasks` holds the task list and saves it to LocalStorage on every change.
2. `useFilters` holds the search and filter values.
3. `App.jsx` derives the visible tasks with `filterTasks()` and passes data and actions to the components.
4. `MainBoard` groups tasks into columns and shows the empty and no-results states.
5. `TaskForm` uses React Hook Form for Add and Edit, with rules from `utils/validation.js`.

## Key Decisions

- **Layered structure:** UI components, hooks (state), utils (pure logic) and storage are kept separate for readability.
- **No Context or Redux:** props only go 3 levels deep, so state lives in custom hooks and is passed down as props.
- **Derived state:** the filtered list is calculated on every render instead of being stored, so it can never go out of sync.
- **Move via dropdown:** simple, accessible and works well on mobile.