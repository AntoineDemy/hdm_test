
# Todo List App: React Frontend & NestJS Backend

## Overview
This project involves working on a Todo List application, with a React-based frontend and a NestJS backend. The task requires setting up the application, running a MySQL database, and implementing specific functionalities on both the backend and frontend.

## Table of Contents
- [Project Setup](#project-setup)
- [Database Configuration](#database-configuration)
- [Backend/Frontend Development](#Backend/Frontend-development)
- [Testing and Debugging](#testing-and-debugging)
- [Conclusion](#conclusion)

---

## Project Setup

1. **Fork and Clone the Repositories**:
   - Begin by forking and cloning the repositories for both the frontend and backend projects.
   - This step ensures you have your own copy of the projects to work on, allowing you to push changes without affecting the original repositories.

2. **Install Dependencies**:
   - Use `yarn` or `yarn install` to install the necessary packages.
   - **Decision Point**: I chose `yarn` over `npm` as per the instructions, ensuring consistency in package management across the project.

## Database Configuration

1. **MySQL Setup**:
   - Ensure you have MySQL running on your machine. If not, use the provided Docker image for MySQL 5.7 from [hdmnetwork/mysql5.7](https://github.com/hdmnetwork/mysql5.7).
   - **Decision Point**: Using Docker is a straightforward way to avoid local installation issues and maintain a consistent environment.

2. **Database Creation**:
   - Check the `.env` file in the backend project for database credentials and database name.
   - Create the database manually using these credentials.
   - **Challenge**: If the database doesn't connect, double-check the `.env` file for any discrepancies and ensure MySQL is running.

3. **Prisma Migration**:
   - Run the Prisma migration command found in the `package.json` of the backend project.
   - This will set up the necessary tables and schema in your MySQL database.

## Backend/Frontend Development

 - I had a lot of trouble with the backend and frontend because I'd never done one before, but I'm still pretty happy with what I was able to achieve in 24 hours. I mainly had trouble understanding the different processes for each task.

## Testing and Debugging

- **Manual Testing**:
  - Tested the application manually after implementing each feature to ensure everything works as expected.

- **Debugging**:
  - Used AI to help me.

## Conclusion

This project involved setting up a full-stack application with a React frontend and a NestJS backend. Key tasks included database setup, implementing task creation and editing on both the frontend and backend, and ensuring smooth integration between components.
