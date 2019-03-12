const express = require('express');
/**
 * @constant router - Express router
 */
const router = express.Router();

/**
 * @route GET api/profile/test
 * @description Test Profile Route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({ message: `Profile Test route Working !` })
);

module.exports = router;
