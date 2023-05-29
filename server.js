const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config()
const db = require('./backend/db');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const studentRoutes = require('./backend/routes/student');
app.use('/students', studentRoutes);

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Server running on port ${port}`));
