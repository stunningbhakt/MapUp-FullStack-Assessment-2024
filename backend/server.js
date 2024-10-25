// server.js content goes here.

const express = require('express');
const { connectDB } = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const csvRoutes = require('./routes/csvRoutes');
const errorHandler = require('./middleware/errorHandler');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/csv', csvRoutes);

// Global error handler
app.use(errorHandler);

// Connect to DB and start the server
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
