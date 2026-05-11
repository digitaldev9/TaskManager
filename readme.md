# Task Manager — Full Stack CRUD Application

A basic full-stack Task Manager application built using:

- React + TypeScript + Vite (Frontend)
- FastAPI (Backend)
- PostgreSQL (Database)
- SQLAlchemy ORM
- JWT Authentication Foundation

The project demonstrates a clean modular backend architecture with complete CRUD operations and frontend-backend integration.

---

# Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Fetch API

## Backend

- FastAPI
- SQLAlchemy
- Pydantic
- JWT / PyJWT
- Passlib + Bcrypt

## Database

- PostgreSQL

---

# Project Architecture

```text
React Frontend
        ↓ HTTP Requests
FastAPI Backend
        ↓ SQLAlchemy ORM
PostgreSQL Database
Features
Backend Features
Modular FastAPI architecture
CRUD operations
SQLAlchemy ORM integration
PostgreSQL connection
Layered architecture:
Routers
Controllers
Services
Models
Schemas
Environment-based configuration
JWT utility setup
Password hashing support
CORS middleware
Frontend Features
Task listing
Create task
Update task completion status
Delete task
Dynamic UI rendering
API integration using fetch()
TypeScript state management
Backend Folder Structure
src/
│
├── app/
│   ├── main.py
│   ├── routers.py
│   ├── database.py
│   ├── auth.py
│   ├── settings.py
│   └── utilities.py
│
├── modules/
│   └── taskmanager/
│       ├── routers.py
│       ├── controller.py
│       ├── services.py
│       ├── models.py
│       └── schemas.py
Frontend Folder Structure
frontend/
│
├── src/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
├── tsconfig.json
└── vite.config.ts
Backend Setup
1. Create Virtual Environment
python -m venv venv
2. Activate Virtual Environment
Windows
venv\Scripts\activate
Linux / Mac
source venv/bin/activate
3. Install Requirements
pip install -r requirements.txt
4. Configure Environment Variables

Create .env in project root:

DATABASE_URL=postgresql://postgres:password@localhost:5432/taskmanager

SECRET_KEY=mysecretkey

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
PostgreSQL Setup
Create Database

Open PostgreSQL shell:

psql -U postgres

Create database:

CREATE DATABASE taskmanager;
Run Backend
python -m uvicorn src.app.main:app --reload

Backend runs on:

http://127.0.0.1:8000

Swagger Docs:

http://127.0.0.1:8000/docs
Frontend Setup
Navigate to Frontend
cd frontend
Install Dependencies
npm install
Run Frontend
npm run dev

Frontend runs on:

http://localhost:5173