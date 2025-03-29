const express = require("express");
const { 
    createPost, 
    getAllPosts, 
    getSinglePost, 
    updatePost, 
    deletePost 
} = require("../controllers/post.controllers.js");
const authMiddleware = require("../middlewares/auth.middlewares.js");

const router = express.Router();

//  Create a new post (Requires Authentication)
router.post("/", authMiddleware, createPost);

//  Get all posts (Public)
router.get("/", getAllPosts);

//  Get a single post by ID (Public)
router.get("/:id", getSinglePost);

//  Update a post (Requires Authentication)
router.put("/:id", authMiddleware, updatePost);

//  Delete a post (Requires Authentication)
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
