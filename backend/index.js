const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// MongoDB connection (optional - will work without actual MongoDB connection)
if (process.env.MONGO_URI && process.env.MONGO_URI !== 'your_mongodb_connection_string') {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));
} else {
  console.log('MongoDB connection string not provided - server will run without database');
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});