const express = require('express');
/**
 * @constant router - Express router
 */
const router = express.Router();

/**
 * @route GET api/posts/test
 * @description Test Post Route
 * @access Public
 */
router.get('/test', (req, res) =>
  res.json({ message: `Posts' Test route Working !` })
);

module.exports = router;
