require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const emailRoutes = require('./routes/email');
const careersRoutes = require('./routes/careers');

const app = express();

// Configure CORS
app.use(cors({
  origin: (origin, callback) => {
    console.log('Request Origin:', origin || 'none'); // Debug origin
    const allowedOrigins = [
      'https://ravilegalassociates.com',
      'https://www.ravilegalassociates.com',
      'http://localhost:3000',
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('CORS rejected origin:', origin);
      callback(null, false); // Gracefully reject
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.options('*', cors());

// Log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - Origin: ${req.headers.origin || 'none'}`);
  next();
});

app.use(express.json());

console.log('MONGO_URI:', process.env.MONGO_URI || 'MONGO_URI not set');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err.message, err.stack));

// Root route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Ravi Legal Associates API is running' });
});

// API routes
app.use('/api/contact', contactRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/careers', careersRoutes);

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err.message, err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));