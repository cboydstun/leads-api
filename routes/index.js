const express = require('express');
const router = express.Router();

//import routers
const leadRouter = require('./leadRouter');

//define routes
router.use('/leads', leadRouter);

//export router
module.exports = router;