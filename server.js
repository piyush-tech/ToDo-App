const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const routes = require('./routes/ToDoRoute')
require('dotenv').config();
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => { console.log(`MongoDB connected successfuly...`) })
    .catch((e) => { console.log(`Error in connecting to MongoDB ${e}`) });

app.use(routes)
