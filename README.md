# Two-Wheeler Safety AI

This repository contains a full-stack application designed to provide safety guidance for two-wheeler riders. The backend uses FastAPI with a retrieval-augmented generation engine, while the frontend is a simple React interface.

## Structure

- **backend/**: Python FastAPI server, data ingestion, and AI integration.
- **frontend/**: React application for user interaction.

## Getting Started

1. Set up a Python virtual environment in `backend/` and install dependencies from `requirements.txt`.
2. Populate `.env` with necessary keys (e.g., `OLLAMA_API_KEY`).
3. Run the FastAPI server using `uvicorn main:app --reload`.
4. In `frontend/`, install npm dependencies and start the dev server.
