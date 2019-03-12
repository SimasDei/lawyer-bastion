const express = require('express');
/**
 * @constant router - Express router
 * @constant bcrypt - Import Bcrypt JS
 * @constant gravatar - Initialize Gravatar Node Package
 */
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');

/**
 * @model User - Import User Model
 */
const User = require('../../models/User');

// ===>Routes<===
/**
 * @route GET api/users/test
 * @description Test Users Route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({ message: `User's Test route Working !` })
);

/**
 * @route POST api/users/register
 * @description Register a User
 * @access Public
 */
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already Registered' });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: 200, // Size
        r: 'r', // Rating
        d: 'retro' // Default
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) console.error({ message: error });
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(error => res.json({ message: error }));
        });
      });
    }
  });
});
module.exports = router;
