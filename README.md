# eNotebook

**eNotebook** is a modern, user-friendly web application designed to help users create, manage, and organize their notes efficiently. Built with **React** and styled using **TailwindCSS**, eNotebook provides a seamless and interactive note-taking experience.  

---

## Features

- **User Authentication**  
  - Sign up and log in functionality  
  - Protected routes for authenticated users only  

- **Notes Management**  
  - Add, edit, and delete notes  
  - Expand individual notes for a detailed view  

- **Responsive UI**  
  - Mobile-first design with Tailwind CSS  
  - Smooth animations using Framer Motion  

- **Notifications**  
  - Real-time feedback using `react-hot-toast`  

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion  
- **Backend:** Node.js, Express (for API and authentication)  
- **HTTP Client:** Axios  
- **Authentication:** JWT or session-based (with cookies)  
- **Notifications:** react-hot-toast  
- **Routing:** React Router v6  

---

## Installation

1. **Clone the repository**  
```bash
git clone https://github.com/your-username/enotebook.git
cd enotebook
npm install
VITE_API_URL=http://localhost:5000/api
CLIENT_URL=http://localhost:3000
npm run dev
```

---

## Project Structure

eNotebook/
├─ client/
│  ├─ dist/
│  ├─ node_modules/
│  ├─ public/
│  ├─ src/
│  │  ├─ api/
│  │  ├─ assets/
│  │  ├─ components/
│  │  ├─ context/
│  │  ├─ pages/
│  │  ├─ routes/
│  │  ├─ App.jsx
│  │  ├─ index.css
│  │  └─ main.jsx
│  ├─ .env
│  ├─ .gitignore
│  ├─ package.json
│  ├─ package-lock.json
│  ├─ postcss.config.js
│  ├─ tailwind.config.js
│  └─ vite.config.js
├─ server/
│  ├─ config/
│  ├─ controllers/
│  ├─ middleware/
│  ├─ models/
│  ├─ routes/
│  ├─ node_modules/
│  ├─ .env
│  ├─ .gitignore
│  ├─ package.json
│  ├─ package-lock.json
│  └─ index.js
└─README.md


---

## Usage

- Open the app in your browser.
- Sign up for a new account or log in with existing credentials.
- Navigate to the Notes page to add, edit, or delete your notes.
- Enjoy smooth animations, notifications, and a responsive interface!

---

## Future Enhancements

- Add search and filter functionality for notes

- Integrate dark mode

- Enable real-time collaboration on notes

- Add tags or categories for better organization