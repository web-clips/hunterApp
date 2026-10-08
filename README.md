# hunterApp — Job Application Tracker

**hunterApp** is a full-stack web application designed to help users organize and track their job applications throughout the recruitment process.

The application provides a convenient interface for managing vacancies, monitoring application statuses, and keeping important job-related information in one place.

## Features

- **User Authentication** — Registration and login using JWT authentication.
- **Job Application Management** — Add and view job applications with detailed information.
- **Application Status Tracking** — Organize applications by status: Applied, Interview, Offer, and Rejected.
- **Status Filtering** — Quickly filter applications by recruitment stage.
- **Application Details** — View information about individual job applications.
- **User-Specific Data** — Each authenticated user accesses their own applications.
- **REST API Integration** — Communication between frontend and backend using Axios and TanStack Query.

## Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- Vite
- React Router
- TanStack Query (React Query)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT Authentication
- bcrypt

### Development Tools
- Git & GitHub
- VS Code
- Postman
- Neon PostgreSQL

## Application Architecture

The project uses a client-server architecture.

**Frontend:** Responsible for the user interface, navigation, forms, application state, and API communication.

**Backend:** Provides REST API endpoints, authentication, business logic, and database operations.

**Database:** PostgreSQL stores user accounts and job application records.

## Authentication

The application uses JWT-based authentication.

1. Users register or log in.
2. The backend validates credentials.
3. A JWT is issued after successful authentication.
4. Protected API requests require a valid token.
5. Job applications are associated with their respective users.

## Getting Started

### Prerequisites

- Node.js and npm
- PostgreSQL database
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/web-clips/hunterApp.git
```

Install dependencies separately in the frontend and backend directories containing their respective `package.json` files:

```bash
npm install
```

### Environment Variables

Configure the backend environment variables in a `.env` file:

```env
DATABASE_URL="your_postgresql_connection_string"
JWT_SECRET="your_jwt_secret"
PORT=5001
```

Never commit real credentials to GitHub.

### Database Setup

From the backend directory, generate the Prisma Client:

```bash
npx prisma generate
```

Apply existing database migrations:

```bash
npx prisma migrate deploy
```

### Running the Application

Start the backend development server:

```bash
npm run dev
```

Start the frontend development server from its own directory:

```bash
npm run dev
```

The frontend communicates with the backend API at `http://localhost:5001/api` in the current development configuration.

## Project Purpose

hunterApp is a personal portfolio project developed to practice real-world full-stack development concepts, including:

- RESTful API development
- Authentication and authorization
- Relational database design
- Frontend and backend integration
- Server-side data management
- Component-based application architecture

## Author

Developed as a full-stack portfolio project using React, Node.js, Express, PostgreSQL, and Prisma.