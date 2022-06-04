/*
Express Router streamlines the routing process to different endpoints.
By using this capability within express, the web application maintains live all the endpoints attached index.js (this file)
*/

const express = require('express');
const router = express.Router();

router.use('/api', require('./api'));

module.exports = router;
