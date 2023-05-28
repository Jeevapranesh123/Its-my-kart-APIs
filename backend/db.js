const mongoose = require('mongoose');
const user = process.env.DB_USER
const password = process.env.DB_PASS

const mongoURI = 'mongodb://db:27017/student'; // Replace with your MongoDB connection URI

// const mongoURI = 'mongodb+srv://'+user+':'+password+'@mumbai.7j89hhn.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
