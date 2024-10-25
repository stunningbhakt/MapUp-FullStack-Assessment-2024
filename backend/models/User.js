// models/User.js content goes here.


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('DB connection error', error);
        process.exit(1);
    }
};

module.exports = { connectDB };
