const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database Connection
mongoose.connect('mongodb://localhost:27017/mm-auto', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// API Routes
app.get('/', (req, res) => {
    res.send('Welcome to MM Auto API');
});

// Add more routes here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
