# AS-SolarSystem

Full-stack application architecture for AS-SolarSystem, featuring a ReactJS frontend and Node/Express backend.

## Project Structure

```
AS-SolarSystem/
├── frontend/             # ReactJS application built with Vite
│   ├── src/
│   │   ├── App.jsx       # Main interactive application UI
│   │   ├── index.css     # Space dark design system & tokens
│   │   └── main.jsx      # React entrypoint
│   ├── index.html        # HTML shell
│   ├── package.json      # Frontend dependencies & scripts
│   └── vite.config.js    # Vite configuration & backend API proxy
├── backend/              # Node.js + Express backend server
│   ├── .env              # Environment variables
│   ├── package.json      # Backend dependencies & scripts
│   └── server.js         # Express server & API endpoints
└── README.md
```

## Quick Start Guide

### 1. Run the Backend Server
Navigate to the `backend` folder and start the server:
```bash
cd backend
npm install
npm run dev
```
The backend API server will run on `http://localhost:5000`.

### 2. Run the Frontend App
In a separate terminal, navigate to the `frontend` folder and start Vite dev server:
```bash
cd frontend
npm install
npm run dev
```
The React frontend application will run on `http://localhost:5173`.

## API Endpoints

- `GET /` - API welcome message & status
- `GET /api/health` - Backend health ping endpoint
- `GET /api/planets` - Solar System celestial bodies dataset