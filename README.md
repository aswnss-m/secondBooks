# Project Documentation: 2ndBooks

## Table of Contents
- [Project Documentation: 2ndBooks](#project-documentation-2ndbooks)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Libraries and Dependencies](#libraries-and-dependencies)

## Introduction
2ndBooks is a web application that facilitates the buying and selling of books. The platform aims to connect book buyers and sellers, providing an easy and efficient way to exchange educational resources. Users can browse through a wide selection of books, view detailed information about each book, and make purchases securely. Sellers can list their books for sale and reach a large audience of potential buyers.

This documentation provides an overview of the project, installation instructions, usage guidelines, API endpoints, and a list of libraries and dependencies used in the development of the application.

## Installation
To use the 2ndBooks web application, follow these steps:

1. Ensure that you have completed the installation steps mentioned above.

2. The project structure consists of two main folders: `client` and `backend`. 

3. **Client-side (Frontend)**:
   - Navigate to the `client` folder using the command:
     ```
     cd client
     ```
   - Install the required dependencies by running:
     ```
     npm install
     ```
   - Start the frontend development server by running:
     ```
     npm run start
     ```
   - The frontend will be accessible at `http://localhost:3000`.

4. **Server-side (Backend)**:
   - Open a new terminal or command prompt and navigate to the `backend` folder:
     ```
     cd backend
     ```
   - Install the required dependencies by running:
     ```
     npm install
     ```
   - Start the backend server using one of the following commands:
     - To start the server in production mode:
       ```
       npm run start
       ```
     - To start the server in development mode using nodemon (automatically restarts the server on code changes):
       ```
       npm run dev
       ```
   - The backend server will be accessible at `http://localhost:5000`.

5. Once both the frontend and backend servers are running, you can access the 2ndBooks web application by opening your web browser and navigating to `http://localhost:3000`.

6. You can now use the application to browse and search for books, add books to the cart, make purchases, and list books for sale. Ensure that you have registered for an account or logged in to access all the features.

7. Feel free to explore the different functionalities of the application and provide any feedback or suggestions for improvement.

**Note**: Ensure that both the frontend and backend servers are running simultaneously for the application to function correctly.

## Usage
2ndBooks provides a user-friendly interface for buyers and sellers to interact with the platform. Here are the main features and functionalities of the application:

1. **User Registration and Authentication**: Users can sign up for a new account or log in to an existing account. User authentication ensures secure access to user-specific features such as purchasing books, listing books for sale, and managing personal information.

2. **Browse and Search Books**: Users can browse through the available books, filter books by various criteria such as course code or semester, and search for specific books using keywords. Detailed information about each book, including the title, author, price, and description, is displayed to help users make informed decisions.

3. **Buy Books**: Users can add books to their cart, view the cart contents, and proceed to checkout. Secure payment options are available to complete the purchase.

4. **Sell Books**: Sellers can list their books for sale by providing relevant information such as the title, cover image, semester, course code, author, description, and price. The listing process is straightforward, and sellers can manage their listed books.

5. **User Profile**: Users have access to their profile page, where they can view their personal information, transaction history, and manage their listed books (if applicable).


## API Endpoints
The 2ndBooks application provides the following API endpoints for interacting with the backend:

1. `GET /books:` Retrieves all books.
2. `GET /books/recent:` Retrieves the most recent books.
3. `PUT /books/update/:id:` Updates a specific book by ID.
4. `GET /books/:id:` Retrieves a specific book by ID.
5. `POST /books/search:` Performs a filtered search for books.
6. `POST /books/add:` Adds a new book.
7. `GET /books/cover/:id:` Retrieves the cover image of a book.
8. `GET /books/details/:id:` Retrieves the details of a book.
9. `DELETE /books/:id:` Deletes a specific book by ID.
10. ` POST /login:` Logs in a user with the provided credentials.
11. ` POST /register:` Registers a new user.
12. ` PUT /users/addbook:` Adds a book to a user's list.
13. ` PUT /users/updateAddress:` Updates a user's address.
14. ` PUT /users/Additem:` Adds an item (book) to a user's cart.
15. ` PUT /users/removeitem:` Removes an item (book) from a user's cart.
16. ` GET /users/:id/sell:` Retrieves the books being sold by a specific user.

These endpoints provide functionality for book management, user authentication, and user profile management.

## Libraries and Dependencies
2ndBooks is built with the following main libraries and dependencies:

- **React** - JavaScript library for building user interfaces
- **Node.js** - JavaScript runtime for server-side development
- **Express** - Web application framework for Node.js
- **MongoDB** - Document-oriented database for data storage
- **Mongoose** - MongoDB object modeling tool for Node.js
- **axios** - Promise-based HTTP client for making API requests
- **react-router-dom** - Library for handling client-side routing in React applications
- **jsonwebtoken** - Library for generating and verifying JSON Web Tokens for user authentication
- **bcrypt** - Library for hashing and salting passwords
- **multer** - Middleware for handling file uploads
- **dotenv** - Library for loading environment variables from a `.env` file
- **cors** - Middleware for enabling Cross-Origin Resource Sharing (CORS)

Refer to the project's `package.json` file for a complete list of libraries and dependencies used in the project.
