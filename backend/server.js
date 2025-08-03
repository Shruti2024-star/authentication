// backend/server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
const homeRoutes = require("./routes/middleware"); 


app.use("/api", homeRoutes);



// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
