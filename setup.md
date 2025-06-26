# Font Management Project Setup Guide

## Prerequisites
- Docker and Docker Compose installed
- Node.js (for local development)
- MySQL (if running locally without Docker)

## Quick Start with Docker

1. **Clone and navigate to the project directory**
   ```bash
   cd final-project-develop
   ```

2. **Create environment file for backend**
   ```bash
   cd backend
   cp env.example .env
   ```

3. **Start the application with Docker Compose**
   ```bash
   docker-compose up --build
   ```

   This will start:
   - MySQL database on port 3306
   - Backend API on port 3000
   - Frontend on port 5000

## Adding Your Downloaded Google Fonts

1. **Create a fonts directory in the backend folder**
   ```bash
   mkdir backend/fonts
   ```

2. **Copy your downloaded Google fonts to the backend/fonts directory**
   ```bash
   # Copy your font files (ttf, otf, woff, woff2) to backend/fonts/
   ```

3. **Run the seed script to import fonts to database**
   ```bash
   cd backend
   npm install
   npm run seed
   ```

## Manual Setup (without Docker)

1. **Install dependencies**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

2. **Set up MySQL database**
   - Create a database named `fonts`
   - Update the `.env` file with your MySQL credentials

3. **Run migrations**
   ```bash
   cd backend
   npm run migration:run
   ```

4. **Start the applications**
   ```bash
   # Backend (in one terminal)
   cd backend
   npm run dev
   
   # Frontend (in another terminal)
   cd frontend
   npm run dev
   ```

## API Endpoints

- `GET /api/fonts` - Get all fonts
- `POST /api/fonts` - Add a new font
- `GET /api/fonts/:id` - Get a specific font

## Troubleshooting

1. **Database connection issues**: Make sure MySQL is running and the credentials in `.env` are correct
2. **Font not loading**: Ensure font files are in the correct format and location
3. **Port conflicts**: Change ports in docker-compose.yml if needed

## Project Structure

```
final-project-develop/
├── backend/           # Node.js API with TypeORM
├── frontend/          # React application
├── docker-compose.yml # Docker configuration
└── setup.md          # This file
``` 