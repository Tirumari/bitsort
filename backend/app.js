const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./routes/api/bits');

// initialize express app
const app = express();

// connect to database
connectDB();

// implement cors module
app.use(cors());
// link to routes
app.use("/", router);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));