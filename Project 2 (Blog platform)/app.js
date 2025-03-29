const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

const authRoutes = require("./src/routes/auth.routes.js");
const userRoutes = require("./src/routes/user.routes.js");
const postRoutes = require("./src/routes/post.routes.js");
const commentRoutes = require("./src/routes/comments.routes.js");
const healthCheckRoutes = require("./src/routes/healthCheck.routes.js");
const errorHandler = require("./src/middlewares/error.middlewares.js");



// Middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})); // // This is used when the frontend is on a different server than the backend.
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/health", healthCheckRoutes);

// Global error handler
app.use(errorHandler);

module.exports = app;
