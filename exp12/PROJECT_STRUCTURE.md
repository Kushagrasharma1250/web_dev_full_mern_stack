# Project Structure Documentation

```
exp12/                                  # Root project directory
│
├── .github/
│   └── copilot-instructions.md        # AI assistant instructions
│
├── server/                             # Node.js/Express Backend
│   ├── config/
│   │   └── db.js                      # MongoDB connection configuration
│   │
│   ├── models/
│   │   ├── User.js                    # User schema with password hashing
│   │   └── Task.js                    # Task schema with references
│   │
│   ├── controllers/
│   │   ├── authController.js          # Auth logic (register, login)
│   │   └── taskController.js          # Task CRUD operations
│   │
│   ├── routes/
│   │   ├── authRoutes.js              # Authentication endpoints
│   │   └── taskRoutes.js              # Task endpoints
│   │
│   ├── middleware/
│   │   └── auth.js                    # JWT authentication middleware
│   │
│   ├── .env                           # Environment variables (not in git)
│   ├── index.js                       # Express server entry point
│   └── package.json                   # Server dependencies
│
├── client/                             # React Frontend
│   ├── public/
│   │   └── index.html                 # HTML entry point
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js              # Navigation bar component
│   │   │   ├── TaskForm.js            # Task creation form
│   │   │   ├── TaskList.js            # Tasks list display
│   │   │   └── TaskItem.js            # Individual task component
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.js               # Login page
│   │   │   ├── Register.js            # Registration page
│   │   │   └── TaskManager.js         # Main task manager page
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.js         # Authentication context provider
│   │   │
│   │   ├── services/
│   │   │   └── api.js                 # Axios API service
│   │   │
│   │   ├── styles/
│   │   │   ├── index.css              # Global styles
│   │   │   ├── App.css                # App styles
│   │   │   ├── Navbar.css             # Navbar styles
│   │   │   ├── Auth.css               # Auth pages styles
│   │   │   ├── TaskManager.css        # Task manager styles
│   │   │   ├── TaskForm.css           # Form styles
│   │   │   ├── TaskList.css           # List styles
│   │   │   └── TaskItem.css           # Item styles
│   │   │
│   │   ├── App.js                     # Main app component with routing
│   │   └── index.js                   # React DOM entry point
│   │
│   ├── .env.local                     # Client environment variables
│   └── package.json                   # Client dependencies
│
├── .env.example                       # Environment variables template
├── .gitignore                         # Git ignore rules
├── package.json                       # Root package.json (concurrently)
├── package-lock.json                  # Lock file
├── README.md                          # Main project documentation
├── SETUP_GUIDE.md                     # Setup and getting started guide
└── node_modules/                      # Dependencies (not in git)

```

## Component Hierarchy

```
App
├── AuthProvider
│   └── AppContent
│       ├── Navbar (when user is logged in)
│       └── Routes
│           ├── Login
│           ├── Register
│           └── TaskManager (Protected)
│               ├── TaskForm
│               └── TaskList
│                   └── TaskItem (multiple)
```

## File Descriptions

### Server Files

| File | Purpose |
|------|---------|
| `server/index.js` | Express server setup, middleware, routes |
| `server/config/db.js` | MongoDB connection function |
| `server/models/User.js` | User schema with password hashing |
| `server/models/Task.js` | Task schema with user reference |
| `server/controllers/authController.js` | Login/Register/Me endpoints |
| `server/controllers/taskController.js` | CRUD endpoints for tasks |
| `server/routes/authRoutes.js` | Auth route definitions |
| `server/routes/taskRoutes.js` | Task route definitions |
| `server/middleware/auth.js` | JWT verification middleware |
| `server/.env` | MongoDB URI, JWT secret, port |
| `server/package.json` | Dependencies: express, mongoose, bcryptjs, etc. |

### Client Files

| File | Purpose |
|------|---------|
| `client/src/App.js` | Main app with routes and providers |
| `client/src/index.js` | React entry point |
| `client/src/context/AuthContext.js` | Authentication state management |
| `client/src/services/api.js` | Axios instance with JWT interceptor |
| `client/public/index.html` | HTML template |
| `client/src/pages/Login.js` | Login page component |
| `client/src/pages/Register.js` | Registration page component |
| `client/src/pages/TaskManager.js` | Main app page with tasks |
| `client/src/components/Navbar.js` | Top navigation bar |
| `client/src/components/TaskForm.js` | New task form |
| `client/src/components/TaskList.js` | List of tasks container |
| `client/src/components/TaskItem.js` | Individual task card |
| `client/src/styles/*.css` | Component stylesheets |

### Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Root package with concurrently script |
| `server/package.json` | Server dependencies |
| `client/package.json` | Client dependencies (React) |
| `.env.example` | Template for environment variables |
| `server/.env` | Server configuration (not in git) |
| `.gitignore` | Files to exclude from git |
| `README.md` | Main documentation |
| `SETUP_GUIDE.md` | Setup instructions |

## Data Flow

### Authentication Flow
```
User Registration/Login
       ↓
   React Component
       ↓
   API Service (axios)
       ↓
   Express Route
       ↓
   Auth Controller
       ↓
   Database (MongoDB)
       ↓
   JWT Token Generated
       ↓
   Stored in localStorage
       ↓
   Included in all requests via interceptor
```

### Task Management Flow
```
Task Action (Create/Update/Delete)
       ↓
   React Component
       ↓
   Task Service
       ↓
   axios (with JWT header)
       ↓
   Express Route
       ↓
   Auth Middleware (verify JWT)
       ↓
   Task Controller
       ↓
   MongoDB Database
       ↓
   Response to Client
       ↓
   Update React State
       ↓
   Re-render Component
```

## Key Technologies per Layer

### Backend
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Password Security**: bcryptjs
- **Middleware**: CORS, body-parser
- **Development**: nodemon

### Frontend
- **UI Framework**: React
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Styling**: CSS3
- **Build Tool**: Create React App

## Environment Variables

### Server Configuration
```
MONGODB_URI        - MongoDB connection string
JWT_SECRET         - Secret for signing tokens
NODE_ENV           - development|production
PORT               - Server port (default 5000)
```

### Client Configuration
```
REACT_APP_API_URL  - Backend API URL
```

## Security Features

1. **Password Security**: bcryptjs hashing
2. **Authentication**: JWT tokens
3. **Authorization**: Token verification middleware
4. **Data Protection**: User-scoped data access
5. **CORS**: Configured for safety
6. **Environment Variables**: Sensitive data stored in .env

## Scalability Considerations

- Database: Indexed fields for performance
- API: RESTful design for extensibility
- Frontend: Component-based architecture
- State: Context API ready for Redux upgrade
- Styling: CSS organized by component

This structure supports both development and production deployments while maintaining clean separation of concerns.
