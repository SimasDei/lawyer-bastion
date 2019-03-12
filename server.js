const express = require('express');
/**
 * @constant mongoose - Establish Connection to DB via mongoose
 */
const mongoose = require('mongoose');

/**
 * @constant app - Initialize Express Framework
 */
const app = express();

/**
 * @constant db - Connection String to Mongo Atlas
 */
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connection to Database Established, Captain o/`))
  .catch(error => console.log({ message: error }));

app.get('/', (req, res) => res.send('Ahoy Sailor o/'));

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server runnin' on port: ${port}, Captain o/`)
);
