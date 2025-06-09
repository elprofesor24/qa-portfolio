# 🧩 ClickTest App

ClickTest is a test practice web application built with **Vue 3**, **Vite**, and **TailwindCSS**, using a simple **Node.js + Express** backend for form validation.

The goal of this app is to simulate common user flows (sign in, sign up, password reset, and profile view) for manual and automated testing purposes.

---

## 🛠️ Technologies Used

### Frontend
- Vue 3 with `<script setup>`
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express
- Simple validation logic (no database)

---

## 🧪 App Features

- **Login form** – basic credential check  
- **Sign up form** – includes validation: empty fields, email format, password length  
- **Forgot password** – mock reset link based on test email  
- **Profile** – static "About Me" view  

Each form includes client-side and server-side validation, and provides UI feedback via modal dialogs.

---

## 📁 Folder Structure

test-app/
├── backend/
│   ├── routes/
│   │   ├── login.js
│   │   ├── signup.js
│   │   └── forgot-password.js
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SignIn.vue
│   │   │   ├── SignUp.vue
│   │   │   ├── ForgotPassword.vue
│   │   │   └── Profile.vue
│   │   └── App.vue
│   └── index.html

---

## 🚀 Local Setup

### 1. Clone the repo and go to the `test-app` folder:

```bash
git clone https://github.com/elprofesor24/qa-portfolio.git
cd qa-portfolio/test-app

2. Start the backend:

cd backend
npm install
node server.js

3. Start the frontend:

cd ../frontend
npm install
npm run dev

4. Open in browser:

http://localhost:5173


⸻

🌐 Live Demo

Try the app live here:
🔗 https://clicktest.dobespavel.cz

⸻

🔍 Intended Use

This app is built for:
	•	Practicing manual QA tasks: bug hunting, exploratory testing, test case writing
	•	Running UI automation with tools like Cypress or Playwright
	•	Demonstrating simple fullstack development skills

⸻

📄 License

MIT – use freely for learning or testing purposes.

