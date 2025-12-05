# MERN Stack Task Manager

A full-stack Task Manager application built with MongoDB, Express, React, and Node.js (MERN stack).

## Features

- **User Authentication**: Register and login with email and password
- **Task Management**: Create, read, update, and delete tasks
- **Task Status**: Track task status (pending, in-progress, completed)
- **Due Dates**: Set and manage task due dates
- **Secure API**: JWT-based authentication and authorization
- **Responsive UI**: Clean and intuitive user interface

## Project Structure

```
mern-app/
├── server/                 # Node.js + Express backend
│   ├── config/            # Database configuration
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Authentication middleware
│   ├── index.js          # Main server file
│   └── package.json      # Server dependencies
├── client/                # React frontend
│   ├── public/           # Static files
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── context/      # Context providers
│   │   ├── styles/       # CSS files
│   │   ├── App.js        # Main App component
│   │   └── index.js      # React entry point
│   └── package.json      # Client dependencies
├── .env.example          # Environment variables example
└── package.json          # Root package.json for concurrently

```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

### 1. Clone or extract the project

```bash
cd exp12
```

### 2. Install root dependencies

```bash
npm install
```

### 3. Install server dependencies

```bash
cd server
npm install
cd ..
```

### 4. Install client dependencies

```bash
cd client
npm install
cd ..
```

### 5. Configure environment variables

Create a `.env` file in the `server` directory:

```bash
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
PORT=5000
```

Create a `.env.local` file in the `client` directory:

```bash
REACT_APP_API_URL=http://localhost:5000
```

## Running the Application

### Development Mode (Both server and client)

From the root directory:

```bash
npm run dev
```

This command will run both the backend server (on port 5000) and frontend (on port 3000) concurrently.

### Running Server Only

```bash
npm run server
```

Server will run on `http://localhost:5000`

### Running Client Only

```bash
npm run client
```

Client will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (requires token)

### Tasks
- `GET /api/tasks` - Get all tasks (requires token)
- `GET /api/tasks/:id` - Get specific task (requires token)
- `POST /api/tasks` - Create new task (requires token)
- `PUT /api/tasks/:id` - Update task (requires token)
- `DELETE /api/tasks/:id` - Delete task (requires token)

## Usage

1. **Register**: Create a new account by providing name, email, and password
2. **Login**: Sign in with your credentials
3. **Create Tasks**: Add new tasks with title, description, status, and due date
4. **Manage Tasks**: Edit or delete existing tasks
5. **Track Progress**: Monitor task status and due dates
6. **Logout**: Sign out of your account

## Technologies Used

### Backend
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **JWT**: Authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

### Frontend
- **React**: UI library
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Context API**: State management

## Environment Variables

### Server (.env)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT tokens
- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port (default: 5000)

### Client (.env.local)
- `REACT_APP_API_URL`: Backend API URL

## Security Notes

- Always change the `JWT_SECRET` in production
- Use environment variables for sensitive data
- MongoDB should be secured with proper authentication
- Use HTTPS in production
- Implement rate limiting for APIs
- Validate and sanitize all inputs

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or connection string is correct
- Check network connectivity for MongoDB Atlas

### Port Already in Use
- Change the PORT in .env file
- Kill the process using the port

### CORS Errors
- Ensure `REACT_APP_API_URL` matches the backend URL
- Check CORS configuration in server/index.js

## Future Enhancements

- Task categories and tags
- Task filtering and sorting
- Email notifications
- File attachments
- Collaboration features
- Analytics dashboard
- Mobile app

## License

ISC

## Support

For issues or questions, please check the code comments or refer to the official documentation of the technologies used.
