const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.dbURI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(dbURI, options)
  .then(() => console.log('Database connected'))
  .catch(err => console.log(err));

module.exports = mongoose;
