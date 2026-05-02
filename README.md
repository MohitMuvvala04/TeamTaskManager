# 🚀 Team Task Manager

## 🔗 Live Project

https://teamtaskmanager-production-4c42.up.railway.app

## 📦 GitHub Repository

https://github.com/MohitMuvvala04/TeamTaskManager

---

## 🧠 About the Project

This project is a backend web application built to manage team projects and tasks efficiently.
Users can register, log in, create projects, assign tasks to team members, and track overall progress through a dashboard.

The main goal of this project is to demonstrate how real-world task management systems work using REST APIs and a database.

---

## ✨ Key Features

* User authentication (Signup & Login using JWT)
* Create and manage projects
* Assign tasks to users
* Update task status
* Dashboard to track total, pending, completed, and overdue tasks
* Basic role-based access (Admin / Member)
* Fully deployed and accessible online

---

## 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT for authentication

---

## 📡 API Overview

Some important endpoints:

* `POST /api/auth/register` → Register user
* `POST /api/auth/login` → Login user
* `POST /api/projects` → Create project
* `GET /api/projects` → Get all projects
* `POST /api/tasks` → Create task
* `GET /api/tasks` → Get all tasks
* `PUT /api/tasks/:id` → Update task status
* `GET /api/tasks/dashboard` → Dashboard summary

---

## ▶️ How to Run Locally

1. Clone the repository
2. Install dependencies
3. Create a `.env` file with:

```
MONGO_URI=your_mongodb_uri  
JWT_SECRET=your_secret  
```

4. Run the server

```
node server.js
```

---

## 🎥 Demo

(A short demo video showing API usage and project flow can be added here)

---

## 📌 Final Note

This project focuses mainly on backend development, API design, and deployment.
It shows how authentication, role-based access, and task management systems work together in a real-world application.
