# 📚 PREPHUT – Online Exam Portal

PREPHUT is a full-stack web-based online examination system that allows students to register, log in, take exams, and view results securely. It also provides a backend powered by Node.js and MongoDB.

---

## 🚀 Features

### 👨‍🎓 Student Features
- User registration & login
- Secure authentication system
- Take online exams
- View results and dashboard
- Password reset functionality
- Clean and responsive UI

### 🛠 Backend Features
- REST API using Node.js & Express
- MongoDB database integration
- Authentication routes (register, login)
- Password reset system
- Secure data handling

### 🎨 Frontend Features
- Pure HTML, CSS, JavaScript (no framework)
- Multi-page UI (login, register, exam, dashboard)
- Responsive design
- Theme toggle (light/dark mode)
- Simple and fast performance

---

## 🏗 Project Structure

PREPHUT/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── exam.html
│   ├── style.css
│   ├── main.js
│   ├── images/
│
└── README.md

---

## ⚙️ Tech Stack

Frontend:
- HTML5
- CSS3
- JavaScript (Vanilla JS)

Backend:
- Node.js
- Express.js
- MongoDB

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Shivamshekharss/Exam-portel.git
cd Exam-portel
```

2️⃣ Setup Backend
```bash
cd backend
npm install
node server.js
```
Backend runs on:
```bash
http://localhost:5000
```
3️⃣ Setup Frontend
Option A (Simple)

Open:

frontend/index.html
Option B (Recommended)

Run local server:

cd frontend
python -m http.server 8000

Then open:

http://localhost:8000

🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login user
POST	/api/auth/forgot-password	Forgot password
POST	/api/auth/reset-password	Reset password

⚠️ Notes
Backend must be running for full functionality
MongoDB must be connected properly
Frontend is static (no npm required)
🚀 Future Improvements
JWT authentication
Admin dashboard
Real-time exam system
Timer-based exams
Cloud deployment
👨‍💻 Author

Shivam Shekhar
GitHub: https://github.com/Shivamshekharss

📜 License

This project is open-source and free to use.

---


