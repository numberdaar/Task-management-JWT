# Task Management Application (Backend)

This is the **backend** of the Task Management Application, which handles user authentication, task management, and integrates with AWS services for data storage and file handling.

## Features

- **User Authentication**: JWT token-based user authentication and password hashing.
- **Task Management**: APIs for creating, updating, and deleting tasks.
- **Data Validation**: Uses `Joi` for schema validation to ensure proper data formats.
- **Security**: Passwords are hashed using `bcrypt` for secure storage.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Getting Started](#getting-started)
3. [Available Scripts](#available-scripts)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [License](#license)

---

## Technologies Used

- **Express.js**: Web framework for Node.js, used for building the API.
- **MongoDB (Mongoose)**: NoSQL database for task storage and user data.
- **bcrypt**: For securely hashing passwords.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **Joi**: For input validation of request data.
- **dotenv**: For managing environment variables.
- **uuid**: For generating unique task identifiers.
- **nodemon**: Automatically restarts the server during development.

---

## Getting Started

Follow these steps to set up and run the backend project locally:

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/numberdaar/Task-management-JWT/tree/main/backend
   npm i
   npm start
   ``` 
