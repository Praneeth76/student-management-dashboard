# Student Management Dashboard

This is a **Student Management Dashboard** built with **React**, **Firebase**, and **Vite**. It features user authentication, student data management, and a clean, modern UI.

## Features

- **Login Page**: User authentication using Firebase Authentication.
- **Dashboard**:
  - Sidebar navigation with links to:
    - **Students Page**: View, add, edit, and delete student records.
    - **Logout**: Log out from the dashboard.
- **Students Page**:
  - Displays a list of students with columns:
    - **ID**, **Name**, **Class**, **Section**, **Roll Number**, and **Actions**.
  - **Add Student**: Opens a modal with a form to add a new student.
  - **Actions**:
    - **View**: View student details (optional future implementation).
    - **Edit**: Edit an existing student's details.
    - **Delete**: Remove a student from the database.
- **Firebase Integration**:
  - Firestore for storing student records.
  - Firebase Authentication for secure login.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Firebase (Firestore, Authentication)
- **Styling**: CSS (custom styles for modern, responsive design)

## Installation and Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Praneeth76/student-management-dashboard.git
cd student-management-dashboard
