require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const emailRoutes = require('./routes/email');
const careersRoutes = require('./routes/careers'); // Added careers route

const app = express();

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: 'https://ravilegalassociates.com',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Handle preflight OPTIONS requests
app.options('*', cors());

app.use(express.json());

console.log('MONGO_URI:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/contact', contactRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/careers', careersRoutes); // Added careers route

// Catch-all for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));