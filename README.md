# 🎟️ Eventora — Full Stack Event Booking Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

</p>

<p align="center">

A modern, secure and scalable **Full Stack MERN Event Booking Platform** featuring JWT Authentication, Email OTP Verification, Role-Based Authorization, Booking Management, Admin Analytics, and Email Notifications.

</p>

---

# 📖 About Eventora

Eventora is a full-stack web application developed using the **MERN Stack (MongoDB, Express.js, React.js and Node.js)** that enables users to discover events, request bookings securely using Email OTP verification, and track booking status from their personal dashboard.

Administrators can manage events, verify booking requests, approve or reject users, update payment status, monitor platform analytics, and maintain seat availability in real time.

The project demonstrates practical implementation of modern web development concepts including:

- Full Stack Development
- REST API Design
- Authentication & Authorization
- MongoDB Database Design
- Email Services
- Responsive UI
- CRUD Operations
- Role Based Access Control
- Secure Booking Workflow

---

# ✨ Key Features

## 👤 User Module

- Secure User Registration
- JWT Login Authentication
- Password Encryption using bcrypt
- Email OTP Verification
- Browse Available Events
- View Event Details
- Book Free & Paid Events
- Booking Request Dashboard
- Cancel Pending Booking
- Responsive User Interface

---

## 🛠 Admin Module

- Secure Admin Login
- Role Based Authorization
- Create Events
- Edit Events
- Delete Events
- View All Bookings
- Approve Booking Requests
- Reject Booking Requests
- Update Payment Status
- Track Revenue
- Dashboard Analytics

---

## 🎫 Smart Booking System

- Email OTP Verification before Booking
- Pending Approval Workflow
- Manual Payment Verification
- Real-Time Seat Availability
- Overbooking Prevention
- Booking Cancellation
- Confirmation Email Notifications

---

## 🔒 Security Features

- JWT Authentication
- bcrypt Password Hashing
- Protected API Routes
- Role-Based Authorization
- Email OTP Verification
- Secure Booking Validation
- Input Validation
- MongoDB Data Protection

---

# 🚀 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Context API

---

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Nodemailer

---

## Development Tools

- VS Code
- Git
- GitHub
- Postman
- MongoDB Atlas

---

# 🏗 Project Architecture

```
                    +----------------------+
                    |      React Client    |
                    +----------+-----------+
                               |
                               |
                          REST APIs
                               |
                               |
                    +----------v-----------+
                    |   Express Server     |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                    |                    |
          |                    |                    |
     Authentication       Event APIs         Booking APIs
          |                    |                    |
          +--------------------+--------------------+
                               |
                          Mongoose ODM
                               |
                               |
                    +----------v-----------+
                    |   MongoDB Atlas      |
                    +----------+-----------+
                               |
                               |
                        Nodemailer Service
                               |
                               |
                        Email Notifications
```

---

# 📁 Folder Structure

```
Eventora
│
├── client
│   ├── src
│   │   ├── components
│   │   │     └── Navbar.jsx
│   │   │
│   │   ├── context
│   │   │     └── AuthContext.jsx
│   │   │
│   │   ├── pages
│   │   │     ├── Home.jsx
│   │   │     ├── Login.jsx
│   │   │     ├── Register.jsx
│   │   │     ├── EventDetail.jsx
│   │   │     ├── UserDashboard.jsx
│   │   │     ├── AdminDashboard.jsx
│   │   │     ├── PaymentSuccess.jsx
│   │   │     └── PaymentFailed.jsx
│   │   │
│   │   ├── utils
│   │   │     └── axios.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   │     ├── authController.js
│   │     ├── bookingController.js
│   │     └── eventController.js
│   │
│   ├── middleware
│   │     └── auth.js
│   │
│   ├── models
│   │     ├── User.js
│   │     ├── Event.js
│   │     ├── Booking.js
│   │     └── OTP.js
│   │
│   ├── routes
│   │     ├── auth.js
│   │     ├── bookings.js
│   │     └── events.js
│   │
│   ├── utils
│   │     └── email.js
│   │
│   ├── server.js
│   ├── seed.js
│   └── .env
│
├── README.md
├── SETUP_GUIDE.md
└── Eventora_Postman_Collection.json
```

---

# ⚙ Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18+ Recommended)
- npm
- MongoDB Atlas Account
- Git
- Postman
- VS Code

---

# 📥 Installation

## Clone Repository

```bash
git clone https://github.com/theashuspeaks/Eventora.git
```

Move into project directory

```bash
cd Eventora
```

Install Root Dependencies

```bash
npm install
```

Install Client & Server Dependencies

```bash
npm run install:all
```

Or install manually

Backend

```bash
cd server
npm install
```

Frontend

```bash
cd client
npm install
```

---

# ☁ MongoDB Atlas Setup

### Step 1

Create a free account

https://www.mongodb.com/cloud/atlas

---

### Step 2

Create a **Free M0 Cluster**

---

### Step 3

Create Database User

Example

```
Username:
eventoradmin

Password:
your_password
```

---

### Step 4

Go to **Network Access**

Allow IP

```
0.0.0.0/0
```

---

### Step 5

Copy Connection String

Example

```env
mongodb+srv://eventoradmin:password@cluster.mongodb.net/eventora
```

---

# 📧 Gmail Configuration

Eventora uses **Nodemailer** for Email OTP Verification and Booking Confirmation.

Enable **2-Step Verification** in your Google Account.

Generate an **App Password**

Use that password inside your `.env` file.

> Normal Gmail passwords will **NOT** work.

---

# 🔐 Environment Variables

Create a file inside

```
server/.env
```

Paste the following

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_key

EMAIL_USER=yourgmail@gmail.com

EMAIL_PASS=your_16_character_app_password

PORT=5000
```

---

# ▶ Running the Project

### Start Backend

```bash
cd server

npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd client

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

### Run Entire Project (Single Terminal)

```bash
npm install

npm run install:all

npm run dev
```

This command starts both the backend and frontend simultaneously using **concurrently**.

---

# ✅ Project Status

✔ User Authentication

✔ JWT Authorization

✔ Email OTP Verification

✔ Event Management

✔ Booking Management

✔ Admin Dashboard

✔ Revenue Analytics

✔ Email Notifications

✔ Responsive Design

✔ MERN Stack Architecture

---
# 📮 API Overview

Eventora follows a RESTful API architecture for seamless communication between the React frontend and the Express backend.

## Authentication APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/verify-register-otp` | Verify registration OTP |
| POST | `/api/auth/login` | Login user |
| POST | `/api/auth/send-login-otp` | Send login OTP (if applicable) |

---

## Event APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/events` | Fetch all events |
| GET | `/api/events/:id` | Fetch single event |
| POST | `/api/events` | Create new event (Admin) |
| PUT | `/api/events/:id` | Update event (Admin) |
| DELETE | `/api/events/:id` | Delete event (Admin) |

---

## Booking APIs

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/bookings/send-otp` | Send booking OTP |
| POST | `/api/bookings/verify-otp` | Verify booking OTP |
| POST | `/api/bookings` | Request Booking |
| GET | `/api/bookings/my-bookings` | User Dashboard |
| PATCH | `/api/bookings/:id/confirm` | Confirm Booking (Admin) |
| PATCH | `/api/bookings/:id/reject` | Reject Booking (Admin) |
| DELETE | `/api/bookings/:id` | Cancel Booking |

---

# 🔐 Authentication Workflow

```text
User Registration
        │
        ▼
Email OTP Sent
        │
        ▼
OTP Verification
        │
        ▼
Account Activated
        │
        ▼
User Login
        │
        ▼
JWT Token Generated
        │
        ▼
Protected API Access
```

---

# 🎟 Booking Workflow

```text
Browse Events
      │
      ▼
Select Event
      │
      ▼
Send Booking OTP
      │
      ▼
Verify OTP
      │
      ▼
Booking Request Created
      │
      ▼
Pending Admin Approval
      │
      ▼
Admin Approves
      │
      ▼
Seat Count Updated
      │
      ▼
Confirmation Email Sent
```

---

# 📊 Admin Dashboard

The Admin Dashboard provides complete control over the platform.

### Dashboard Features

- Create Events
- Update Events
- Delete Events
- View All Users
- View Booking Requests
- Approve / Reject Requests
- Mark Booking as Paid
- Revenue Analytics
- Pending Requests Counter
- Confirmed Bookings
- Seat Availability Tracking

---

# 👤 User Dashboard

Every registered user gets a personalized dashboard where they can:

- View all requested bookings
- Check booking status
- Cancel pending requests
- Track approved bookings
- View event details
- Manage account

---

# 📧 Email Notifications

The application automatically sends emails for:

- Account Verification OTP
- Booking Verification OTP
- Booking Confirmation
- Booking Status Updates

Powered using **Nodemailer** with Gmail App Password Authentication.

---

# 📱 Responsive Design

Eventora is fully responsive and optimized for:

- Desktop
- Laptop
- Tablet
- Mobile Devices

Built using **Tailwind CSS**.




## Frontend

Recommended Platforms

- Vercel
- Netlify

---

## Backend

Recommended Platforms

- Render
- Railway

---

## Database

- MongoDB Atlas

---

# ⚙ Environment Configuration

The backend requires the following environment variables.

```env
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

EMAIL_USER=your_email@gmail.com

EMAIL_PASS=your_app_password

PORT=5000
```
---

# 🧠 Learning Outcomes

This project helped strengthen practical knowledge of:

- MERN Stack Development
- React Component Architecture
- REST API Development
- JWT Authentication
- Email Authentication (OTP)
- MongoDB Data Modeling
- Express Middleware
- CRUD Operations
- Role-Based Access Control
- Protected Routes
- Secure Booking Workflow
- Full Stack Deployment

---

# 👨‍💻 Author

## Ashutosh Mishra

**Full Stack Developer | MERN Stack Developer | Entrepreneur**

### Connect with me

- **GitHub:** https://github.com/theashuspeaks
- **LinkedIn:** *https://www.linkedin.com/in/theashuspeaks/*


<p align="center">

Made with ❤️ using the MERN Stack.

**© 2026 Ashutosh Mishra • theashuspeaks**

</p>