# JWT-ADVANCED Project: Simple Posts

This project demonstrates how to implement JSON Web Tokens (JWT) for user authentication and authorization in a Node.js application. It consists of two servers: one for handling authentication and token generation, and another for serving the API routes. Users can log in to access protected routes and perform various actions, such as fetching posts and user data.

## Project Structure

- **Server 1 (API Server)**:
  - Handles API routes for fetching posts and user data.
  - Runs on port 3000.
- **Server 2 (Auth Server)**:
  - Handles authentication and token generation.
  - Runs on port 4000.

## Setup Guide

Follow these steps to set up and run the project:

1. **Clone the repository:**

```bash
git clone https://github.com/Lodjuret2001/jwt-advanced.git
```

2. **Install dependencies for both servers:**

```bash
cd simple-posts
npm install
```

3. **Start the Auth Server:**

```bash
npm run startAuthServer
```

4. **Start the API Server:**

```bash
npm run startApiServer
```

5. **Database Setup:**

   - This project utilizes a MongoDB database. Make sure you have MongoDB installed and running on your system.
   - Dummy JSON data is provided in the `data` folder. You can import it into your MongoDB database for testing purposes.

6. **API Endpoints and Role-Based Authorization:**

   - The API endpoints now utilize the user's role property and a middleware to check if the user has the role permission to access the endpoint.
   - Endpoints are structured based on different roles:
     - `/api/roles/admin` - Requires the "admin" role.
     - `/api/roles/editor` - Requires the "editor" role.
     - `/api/roles/viewer` - Requires the "viewer" role.
   - Middleware function `verifyRole` checks if the user has the required role permission.

## Authentication and Authorization

- **Login**: To log in, send a POST request to `http://localhost:4000/api/login` with the username and password in the request body. Upon successful login, the server generates a JWT and sets it as a cookie.
- **Logout**: To log out, send a DELETE request to `http://localhost:4000/api/logout`. This clears the JWT cookie.
- **Protected Routes**: Routes like `/api/posts/user`, `/api/posts/:id`, and `/api/user/:id` are protected. To access them, the client must include a valid JWT in the request headers.

## Contributions

If you find any bugs or have suggestions for improvements, feel free to open an issue or make a pull request. Contributions are welcome and appreciated!

Special thanks to JWT for providing such a robust and reliable package for authentication and authorization.