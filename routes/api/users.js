const express = require('express');
/**
 * @constant router - Express router
 */
const router = express.Router();

/**
 * @route GET api/users/test
 * @description Test Users Route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({ message: `User's Test route Working !` })
);

module.exports = router;
