# Blog Platform Backend

This is the backend for a blogging platform where users can write, edit, and delete blog posts. Other users can read and comment on posts.

## Features

- **User Authentication**: Register, login, and manage user accounts.
- **Blog Posts**: CRUD operations for blog posts.
- **Comments**: Users can comment on posts.
- **User Roles and Permissions**: Admin and user roles for access control.

## Tech Stack

- **Node.js** with Express.js
- **MongoDB** with Mongoose
- **JWT Authentication**
- **bcrypt.js** for password hashing

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/blog-platform-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd blog-platform-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
5. Start the server:
   ```sh
   npm start
   ```

## Project Structure
```
/blog-platform-backend
│   .env
│   .gitignore
│   package.json
│   server.js
│
├───config
│   └── db.config.js
│
├───controllers
│   ├── auth.controller.js
│   ├── user.controller.js
│   ├── post.controller.js
│   ├── comment.controller.js
│   ├── healthCheck.controller.js
│
├───middlewares
│   ├── auth.middleware.js
│   ├── roles.middleware.js
│   ├── error.middleware.js
│
├───models
│   ├── user.model.js
│   ├── post.model.js
│   ├── comment.model.js
│
├───routes
│   ├── auth.routes.js
│   ├── user.routes.js
│   ├── post.routes.js
│   ├── comment.routes.js
│   ├── healthCheck.routes.js
│
├───utils
│   ├── ApiError.utils.js
│   ├── ApiResponse.utils.js
│   ├── asyncHandler.utils.js
```

## API Endpoints

- **Auth Routes** (`/api/auth`)
  - `POST /register` - Register a new user
  - `POST /login` - Login user
- **User Routes** (`/api/users`)
  - `GET /me` - Get current user details
  - `PATCH /me` - Update user details
- **Post Routes** (`/api/posts`)
  - `GET /` - Get all posts
  - `POST /` - Create a new post
  - `GET /:id` - Get a single post
  - `PATCH /:id` - Update a post
  - `DELETE /:id` - Delete a post
- **Comment Routes** (`/api/comments`)
  - `POST /:postId` - Add comment to a post
  - `GET /:postId` - Get comments for a post
  - `DELETE /:commentId` - Delete a comment

## License
MIT

## Author
Oghenetega Godwin

