require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const emailRoutes = require('./routes/email');
const careersRoutes = require('./routes/careers');

const app = express();

// Configure CORS
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://ravilegalassociates.com',
    'https://www.ravilegalassociates.com',
    'http://localhost:3000',
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || !origin) {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Vary', 'Origin');
  if (req.method === 'OPTIONS') {
    return res.status(204).send();
  }
  next();
});

// Log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - Origin: ${req.headers.origin || 'none'} - IP: ${req.ip}`);
  next();
});

app.use(express.json({ limit: '10mb' }));

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
app.use('/email', emailRoutes); // Legacy route for backward compatibility

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