# Whitecircle Group Website

Full-stack web project for Whitecircle Group with:

- **Frontend**: React + Vite (corporate white & blue theme)
- **Backend**: Node.js + Express + MongoDB
- **CMS**: Simple admin panel to manage services (extendable to portfolio, careers, testimonials, etc.)

## Getting Started

### Backend

```bash
cd backend
npm install
cp .env.example .env   # fill MONGO_URI and JWT_SECRET
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Set `VITE_API_URL` in `frontend/.env` if your backend is not on the default `http://localhost:5000/api`.
