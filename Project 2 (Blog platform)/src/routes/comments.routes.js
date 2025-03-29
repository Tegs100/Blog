const express = require("express");
const { createComment, getPostComments, updateComment, deleteComment } = require("../controllers/comments.controllers.js");
const authMiddleware = require("../middlewares/auth.middlewares.js");

const router = express.Router();

// Create a comment (Authenticated users only)
router.post("/", authMiddleware, createComment);

// Get comments for a specific post
router.get("/:postId", getPostComments);

// Update a comment (Only the comment owner can update)
router.put("/:id", authMiddleware, updateComment);

// Delete a comment (Only the comment owner can delete)
router.delete("/:id", authMiddleware, deleteComment);

module.exports = router;
