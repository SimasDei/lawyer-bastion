/**
 * @constant express - Express
 * @constant mongoose - Establish Connection to DB via mongoose
 * @constant app - Initialize Express Framework
 * @constant bodyParser - Import Body Parser
 */
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @constant users - Users API Routes
 * @constant profile - profile API Routes
 * @constant posts - posts API Routes
 */
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

/**
 * @constant db - Connection String to Mongo Atlas
 * @method mongoose.connect(db) - Use Mongoose to Connect to mongoDB
 */
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log(`Connection to Database Established, Captain o/`))
  .catch(error => console.log({ message: error }));

/**
 * Initialize Routes
 */
app.get('/', (req, res) => res.send('Ahoy Sailor o/'));
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

/**
 * @constant port - Set Server Port
 * @method app.listen() - Start Server
 */
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Server runnin' on port: ${port}, Captain o/`)
);
