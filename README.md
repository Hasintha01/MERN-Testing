# MERN Testing Project

A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for testing and development purposes.

## 🚀 Project Overview

This project demonstrates a complete MERN stack setup with a React frontend and Express backend. It features a beautiful testing page that displays the project status and serves as a foundation for further development.

## 📋 Features

### Frontend (React)
- ✅ Custom React application with beautiful UI
- ✅ Gradient backgrounds and modern styling
- ✅ Status display cards for frontend and backend
- ✅ Responsive design
- ✅ Axios for API requests
- ✅ React Router for navigation

### Backend (Express/Node.js)
- ✅ Express.js server with CORS enabled
- ✅ MongoDB integration ready (Mongoose)
- ✅ Environment variable support (.env)
- ✅ Development mode with Nodemon
- ✅ RESTful API structure ready

## 🛠 Tech Stack

**Frontend:**
- React.js
- CSS3 (Custom styling)
- Axios
- React Router DOM

**Backend:**
- Node.js
- Express.js
- Mongoose (MongoDB ODM)
- CORS
- Dotenv
- Nodemon (development)

## 📁 Project Structure

```
my-mern-app/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Styles and animations
│   │   ├── index.js        # React entry point
│   │   └── index.css       # Global styles
│   ├── package.json
│   └── README.md
├── backend/
│   ├── index.js            # Express server
│   ├── package.json        # Backend dependencies
│   ├── .env               # Environment variables
│   └── .gitignore
├── .gitignore             # Project-wide ignore rules
└── README.md              # This file
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (optional - for database features)

### 1. Clone the Repository
```bash
git clone https://github.com/Hasintha01/MERN-Testing.git
cd MERN-Testing
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

## 🚀 Running the Application

### Start Backend Server
```bash
cd backend
npm run dev
```
Backend will run on: `http://localhost:5000`

### Start Frontend Server
```bash
cd frontend
npm start
```
Frontend will run on: `http://localhost:3000`

## 📊 Application URLs

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Test Endpoint**: http://localhost:5000/ (returns server status)

## 🎨 Features Showcase

The application includes:

1. **Beautiful Landing Page**: Custom-styled page with gradient backgrounds
2. **Status Cards**: Real-time display of frontend and backend status
3. **Modern UI**: Glass-morphism effects and smooth animations
4. **Responsive Design**: Works on desktop and mobile devices
5. **Development Ready**: Hot-reload enabled for both frontend and backend

## 🔧 Development

### Available Scripts

**Backend:**
- `npm run dev` - Start development server with Nodemon
- `npm start` - Start production server

**Frontend:**
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests

### Adding New Features

1. **Frontend Components**: Add new React components in `frontend/src/components/`
2. **Backend Routes**: Create new API routes in `backend/routes/`
3. **Database Models**: Add Mongoose models in `backend/models/`

## 🌐 Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-testing
NODE_ENV=development
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 API Endpoints

### Current Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /        | Server status check |

### Planned Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/test | Test API endpoint |
| POST   | /api/data | Create new data |
| GET    | /api/data | Get all data |

## 🚨 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   ```

2. **MongoDB connection error**
   - Ensure MongoDB is running
   - Check MONGO_URI in .env file

3. **Dependencies issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Hasintha01**
- GitHub: [@Hasintha01](https://github.com/Hasintha01)
- Repository: [MERN-Testing](https://github.com/Hasintha01/MERN-Testing)

## 🎯 Next Steps

- [ ] Add user authentication
- [ ] Implement CRUD operations
- [ ] Add more API endpoints
- [ ] Integrate with MongoDB
- [ ] Add unit tests
- [ ] Deploy to production

---

**Happy Coding! 🚀**