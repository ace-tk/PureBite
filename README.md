# PureBite

PureBite is a full-stack e-commerce web application for organic groceries, built with the MERN stack.

## ✨ Features
- **User Authentication**: Secure Sign Up and Login with JWT.
- **Product Catalog**: Dynamic shopping experience with live data from MongoDB.
- **Subscription Model**: Weekly and monthly organic grocery baskets.
- **Sustainability Indicators**: Eco-scores and nutritional details for every product.

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) connection string.

### 2. Setup
1. Clone the repository and navigate to the project root.
2. Update the `MONGO_URI` and `JWT_SECRET` in `backend/.env`.

### 3. Usage
You can now run both the frontend and backend simultaneously from the root directory:

```bash
# Start both Frontend & Backend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Vite, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Security**: JWT Authentication, Bcryptjs
