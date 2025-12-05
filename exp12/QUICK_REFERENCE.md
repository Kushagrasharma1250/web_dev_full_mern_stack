# MERN Task Manager - Quick Reference

## 🚀 Quick Start

```bash
# Install all dependencies
npm install
cd server && npm install && cd ..
cd client && npm install && cd ..

# Start development environment
npm run dev

# Access the app
Frontend: http://localhost:3000
Backend API: http://localhost:5000
```

## 📁 Key Files

| Component | Location | Purpose |
|-----------|----------|---------|
| API Config | `server/config/db.js` | MongoDB connection |
| User Model | `server/models/User.js` | User schema |
| Task Model | `server/models/Task.js` | Task schema |
| Auth API | `server/routes/authRoutes.js` | Login/Register endpoints |
| Task API | `server/routes/taskRoutes.js` | Task endpoints |
| Main App | `client/src/App.js` | React app with routing |
| Auth Context | `client/src/context/AuthContext.js` | Auth state management |
| API Service | `client/src/services/api.js` | API calls |

## 🔌 API Endpoints

### Auth
```
POST   /api/auth/register      { name, email, password }
POST   /api/auth/login         { email, password }
GET    /api/auth/me            (requires token)
```

### Tasks (all require JWT token)
```
GET    /api/tasks              Get all tasks
POST   /api/tasks              { title, description, status, dueDate }
GET    /api/tasks/:id          Get specific task
PUT    /api/tasks/:id          Update task
DELETE /api/tasks/:id          Delete task
```

## 🔧 Environment Variables

**Server (.env):**
```
MONGODB_URI=mongodb://localhost:27017/mern-app
JWT_SECRET=change_me_in_production
NODE_ENV=development
PORT=5000
```

**Client (.env.local):**
```
REACT_APP_API_URL=http://localhost:5000
```

## 📦 Available Commands

```bash
# Root
npm run dev              # Run both server and client
npm run server          # Run backend only
npm run client          # Run frontend only
npm run build           # Build React app

# Server
npm start               # Run server
npm run dev             # Run with auto-reload

# Client
npm start               # Dev server
npm run build           # Build for production
npm test                # Run tests
```

## 🗄️ Database Schema

### User
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Task
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  status: "pending" | "in-progress" | "completed",
  userId: ObjectId (reference to User),
  dueDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Security

- Passwords: Hashed with bcryptjs
- Auth: JWT tokens (30-day expiry)
- Authorization: Token required for task operations
- CORS: Configured for localhost
- Data: User-scoped access control

## 🛠️ Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Ensure MongoDB is running: `mongod` |
| Port 5000 in use | Change PORT in server/.env or kill process |
| CORS errors | Check REACT_APP_API_URL in client/.env.local |
| Dependencies missing | Run `npm install` in root, server, and client |
| Node modules issues | Delete node_modules and package-lock.json, reinstall |

## 📚 Project Files

- **README.md** - Full documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **PROJECT_STRUCTURE.md** - Complete project overview
- **QUICK_REFERENCE.md** - This file
- **.env.example** - Environment variables template

## 💡 Development Tips

- Use `npm run dev` in root to run everything at once
- Check browser console for React errors
- Check terminal for backend logs
- MongoDB must be running before starting server
- Modify CSS in `client/src/styles/` for styling
- Add new routes in `server/routes/` and `client/src/pages/`

## 🎯 Next Steps

1. Ensure MongoDB is running
2. Run `npm run dev` from project root
3. Open http://localhost:3000
4. Create account and start managing tasks
5. Explore the code to understand the structure
6. Customize as needed for your use case

## 📞 Support

See documentation files:
- General questions → README.md
- Setup issues → SETUP_GUIDE.md
- Code structure → PROJECT_STRUCTURE.md
- API details → README.md (API Endpoints section)

---

**Status**: ✅ Ready to Run
**Last Updated**: December 2025
**Dependencies**: ✅ Installed
**Database**: Configure in server/.env
