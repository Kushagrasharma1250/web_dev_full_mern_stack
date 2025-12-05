# MERN Stack Task Manager - Setup & Getting Started Guide

## Quick Start

Your MERN application has been successfully scaffolded! Follow these steps to get it running.

### Prerequisites
- Node.js (v14+) - Already verified
- MongoDB running locally or Atlas connection string
- npm or yarn

## Step 1: Configure MongoDB

### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start MongoDB:
   - Windows: `mongod`
   - macOS: `brew services start mongodb-community`
   - Linux: `sudo systemctl start mongod`

### Option B: MongoDB Atlas (Cloud)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get your connection string
4. Update `MONGODB_URI` in `server/.env`

## Step 2: Environment Setup

The `.env` files are already configured with defaults:

**Server** (`server/.env`):
```
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=your_jwt_secret_key_change_this_in_production
NODE_ENV=development
PORT=5000
```

**Client** (`client/.env.local`):
```
REACT_APP_API_URL=http://localhost:5000
```

Change `JWT_SECRET` to a secure random string in production!

## Step 3: Start the Application

### Option A: Run Everything Together (Recommended)
```bash
npm run dev
```
This starts both server (port 5000) and client (port 3000).

### Option B: Run Separately
**Terminal 1 - Start Backend:**
```bash
npm run server
```

**Terminal 2 - Start Frontend:**
```bash
npm run client
```

## Step 4: Access the Application

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/api/health

## First Time Usage

1. **Create Account**
   - Click "Register" on the login page
   - Enter name, email, and password

2. **Login**
   - Use your credentials to login

3. **Create Tasks**
   - Add tasks with title, description, status, and due date
   - Tasks are saved to MongoDB

4. **Manage Tasks**
   - Edit task details by clicking "Edit"
   - Delete tasks by clicking "Delete"
   - Track progress with status indicators

## Project Structure

```
mern-app/
├── server/                    # Node.js/Express backend
│   ├── config/db.js          # MongoDB connection
│   ├── models/               # Mongoose schemas (User, Task)
│   ├── controllers/          # Request handlers
│   ├── routes/               # API endpoints
│   ├── middleware/auth.js    # JWT authentication
│   ├── index.js              # Express server
│   └── package.json
│
├── client/                    # React frontend
│   ├── public/index.html
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── services/api.js   # API calls
│   │   ├── context/          # Auth context
│   │   ├── styles/           # CSS files
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## Key Features Implemented

✅ User Registration & Login (JWT Authentication)
✅ Task CRUD Operations (Create, Read, Update, Delete)
✅ Task Status Tracking (Pending, In-Progress, Completed)
✅ Due Date Management
✅ Responsive UI with React
✅ RESTful API with Express
✅ MongoDB Database with Mongoose
✅ Password Hashing with bcryptjs
✅ Protected Routes & JWT Middleware

## Available Scripts

### Root Level
- `npm run dev` - Run both server and client
- `npm run server` - Start backend only
- `npm run client` - Start frontend only
- `npm run build` - Build React app

### Server
- `npm start` - Run server
- `npm run dev` - Run with nodemon (auto-reload)

### Client
- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests

## API Documentation

### Authentication Endpoints
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user
```

### Task Endpoints (All require JWT token)
```
GET    /api/tasks            - Get all user's tasks
GET    /api/tasks/:id        - Get specific task
POST   /api/tasks            - Create new task
PUT    /api/tasks/:id        - Update task
DELETE /api/tasks/:id        - Delete task
```

## Database Schema

### User
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Task
```javascript
{
  title: String (required),
  description: String,
  status: String (pending|in-progress|completed),
  userId: ObjectId (reference to User),
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## Troubleshooting

### "Cannot connect to MongoDB"
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify network access if using Atlas

### "Port 5000 already in use"
- Change PORT in `server/.env`
- Or kill process: `lsof -ti:5000 | xargs kill -9`

### "CORS errors"
- Verify `REACT_APP_API_URL` matches backend URL
- Check server CORS configuration

### "Dependencies not installed"
- Run `npm install` in root, server, and client directories
- Delete `node_modules` and `package-lock.json` and reinstall

## Next Steps

1. **Customize Styling**
   - Modify CSS files in `client/src/styles/`

2. **Add Features**
   - Task categories
   - Search/filter
   - Email notifications
   - Collaboration

3. **Deploy**
   - Backend: Heroku, AWS, DigitalOcean, etc.
   - Frontend: Vercel, Netlify, GitHub Pages
   - Database: MongoDB Atlas

4. **Secure for Production**
   - Change JWT_SECRET
   - Use HTTPS
   - Enable CORS properly
   - Add rate limiting
   - Validate all inputs

## Development Tips

- Use Redux or Zustand for complex state management
- Add TypeScript for type safety
- Implement testing (Jest, React Testing Library)
- Use ESLint & Prettier for code quality
- Add CI/CD pipeline

## Resources

- Express.js: https://expressjs.com/
- React: https://react.dev/
- MongoDB: https://docs.mongodb.com/
- Mongoose: https://mongoosejs.com/
- JWT: https://jwt.io/

## Support

For issues:
1. Check the README.md for detailed information
2. Review error messages in console/terminal
3. Check MongoDB logs
4. Verify environment variables

Happy coding! 🚀
