const asyncHandler = require("../utils/asyncHandler.utils");
const ApiError = require("../utils/ApiError.utils");
const ApiResponse = require("../utils/ApiResponse.utils");
const Comment = require("../models/comments.models.js");
const Post = require("../models/post.models.js");

// Create a Comment
const createComment = asyncHandler(async (req, res) => {
  const { content, postId } = req.body;
  if (!content || !postId) throw new ApiError(400, "Content and postId are required");

  const post = await Post.findById(postId);
  if (!post) throw new ApiError(404, "Post not found");

  const comment = await Comment.create({
    content,
    user: req.user._id,
    post: postId,
  });

  res.status(201).json(new ApiResponse(201, comment, "Comment created successfully"));
});

// Get Comments for a Post
const getPostComments = asyncHandler(async (req, res) => {
  const { postId } = req.params;
  const comments = await Comment.find({ post: postId }).populate("user", "username");

  res.status(200).json(new ApiResponse(200, comments, "Comments retrieved successfully"));
});

// Update a Comment
const updateComment = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content) throw new ApiError(400, "Content is required");

  const comment = await Comment.findOneAndUpdate(
    { _id: req.params.id, user: req.user._id },
    { content },
    { new: true, runValidators: true }
  );

  if (!comment) throw new ApiError(404, "Comment not found or unauthorized");

  res.status(200).json(new ApiResponse(200, comment, "Comment updated successfully"));
});

// Delete a Comment
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id,
  });

  if (!comment) throw new ApiError(404, "Comment not found or unauthorized");

  res.status(200).json(new ApiResponse(200, null, "Comment deleted successfully"));
});

module.exports = {
  createComment,
  getPostComments,
  updateComment,
  deleteComment,
};
