const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const ApiResponse = require("../utils/ApiResponse.utils");
const Post = require("../models/post.models.js");

//  Create a New Post
const createPost = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) throw new ApiError(400, "Title and content are required");

    const newPost = await Post.create({
        title,
        content,
        author: req.user._id, // Logged-in user is the author
    });

    res.status(201).json(new ApiResponse(201, newPost, "Post created successfully"));
});

//  Get All Posts
const getAllPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find().populate("author", "username email");

    res.status(200).json(new ApiResponse(200, posts, "All posts retrieved successfully"));
});

// Get a Single Post
const getSinglePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id).populate("author", "username email");
    if (!post) throw new ApiError(404, "Post not found");

    res.status(200).json(new ApiResponse(200, post, "Post details retrieved successfully"));
});

//  Update a Post
const updatePost = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const post = await Post.findById(req.params.id);
    
    if (!post) throw new ApiError(404, "Post not found");
    if (post.author.toString() !== req.user._id.toString()) throw new ApiError(403, "Unauthorized to update this post");

    post.title = title || post.title;
    post.content = content || post.content;
    await post.save();

    res.status(200).json(new ApiResponse(200, post, "Post updated successfully"));
});

// Delete a Post
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);
    if (!post) throw new ApiError(404, "Post not found");
    if (post.author.toString() !== req.user._id.toString()) throw new ApiError(403, "Unauthorized to delete this post");

    await post.deleteOne();

    res.status(200).json(new ApiResponse(200, null, "Post deleted successfully"));
});

module.exports = {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost,
};
