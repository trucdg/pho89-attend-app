# 🍜 Pho89 Employee Attendance WebApp
## Introduction and Motivation:
So I'm working part-time at Pho 89 as a waitress, and I noticed that my manager using pen and paper to track employee attendance, the process that felt outdated and time-consuming.

Inspired by a desire to save our manager time and fueled by a personal passion to enhance my technical skills, I started Pho89Trackr, an employee attendance web app tailored for Pho 89.

## Features:
1. **User-Friendly Interface**:
   - Since everyone at the restaurant is very busy. I wanted to design a simple and intuitive interface that allow both the employees and managers to easily record and access attendance data in several clicks.
2. **Attendance Checking**:
   - Employees will check in using a 4-digit code
   - When checking in, camera may be enabled to take a snapshot of the current employee to avoid false check-in.
3. **Employee Profiles**:
   - Create profiles for each employee with their basic information (id, name, and position)
   - Manager can edit employee profiles.
4. **Report and Analytics**:
   - Generate reports on attendance, late arrivals, and other relevant metrics to help with decision-making and payroll.
   - Automatically email reports to managers on a set schedule.
   - Allow the export of attendance data in various format (i.e: csv, pdf) for record-keeping and audit purposes.
5. **Security and Access Control**:
   - Ensure data privacy and security by implementing role-based access control, limit who can view and edit attendance records
  
## Simplified User Flow:
![Userflow](https://github.com/trucdg/pho89-attend-app/blob/main/Flowchart%20Template.jpg)

## The MVC architecture:
1. **Model**:
   - **User Model**: store information about the users
      - Role: Manager, Kitchen Staff, Waiter
      - Name
      - Passcode
   - **Attendance Model**:
      - stores clock-in time and shift information for employees
2. **View**:
   - **User Interface**: Design UI for user login, registration, employee profile management, attendance tracking, and reporting.
   - **Dashboard**: Create a dashboard for managers to view real-time attendance data and access reports.
3. **Controller**:
   - **User Controller**: Handle login and profile management. Manage user roles and permissions
   - **Attendance Controller**: Process clock-in and clock-out actions, and attendance tracking logic. Calculate work hours and update records
   - **Report Controller**: Generate reports and analytics based on attendance data

## Define MVP (Minimal Viable Product):
- User creation with basic roles (managers and employees) and minimal permissions.
- Real-time attendance tracking, managers can view who is currently on shift.
- Basic reporting, allowing managers to view attendance records for a specific timeframe.
- Minimal error handling: provide feedback to users in case of registration/ login issues.

## Initial UI

![Initial UI](https://github.com/trucdg/pho89-attend-app/blob/main/initial_ui.JPG)
