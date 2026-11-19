const dns = require('dns');

if (process.platform === 'win32') {
    dns.setServers(['8.8.8.8', '8.8.4.4']);
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('PREPHUT Backend is running!');
});

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/prephut';

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');

        app.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection failed:', err);
        process.exit(1);
    });
