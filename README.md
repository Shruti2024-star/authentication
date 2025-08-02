# Full Stack Authentication App (React + Node.js + JWT)

This is a full-stack authentication system with protected routing using JWT. It includes user registration, login, logout, protected welcome page, and token-based session handling.

---

## Setup & Run Instructions

### Backend Setup (/backend)

1. Navigate to the backend folder:
   cd backend

2. Install dependencies:
   npm install

3. Create a .env file inside /backend:
   JWT_SECRET=your_secret_key  
   JWT_EXPIRES_IN=1h

4. Run the server:
   nodemon server.js

   The backend will run at: http://localhost:5000

---

### Frontend Setup (/frontend)

1. Navigate to the frontend folder:
   cd frontend

2. Install dependencies:
   npm install

3. Run the frontend app:
   npm start

   The frontend will run at: http://localhost:3000

---

## Technical Decisions & Folder Structure

### Backend

- Express is used for handling RESTful routes.
- JWT is used to issue and verify tokens.
- bcrypt is used to securely hash passwords before storing them in the database.
- Middleware checks the validity of the token before allowing access to protected routes.

Folder structure:

backend/
│
├── models/
│   └── user.js
│
├── routes/
│   ├── auth.js
│   └── middleware.js
│
├── node_modules/         
├── .env                
├── .gitignore            
├── package.json
├── package-lock.json
└── server.js
       

### Frontend

- React Router is used for navigation (login, signup, welcome).
- Token is saved in localStorage and sent with each protected request using Axios headers.
- On logout, token is cleared from localStorage.

Folder structure:

frontend/
│
├── public/            # Static assets
├── src/               # React components
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Welcome.jsx
│   └── ResetPassword.jsx
└── .gitignore         # To ignore node_modules


---

## Challenges Faced

- Managing token-based authorization and securely storing token on the client side.
- Ensuring correct error handling for invalid or expired tokens.
- Handling user state after login (e.g., syncing React state and localStorage).
- Preventing unauthorized access to protected routes like /welcome.

---

## Potential Improvements

- Use a database like MongoDB  for real data storage.
- Implement token expiration handling and refresh tokens.
- Add email verification and forgot password functionality.
- Improve form validation and show user feedback dynamically.
- Move hardcoded URLs to environment variables (.env).

---

## Author

Name: Polishetty Shruti 
GitHub:https://github.com/Shruti2024-star/
