'use strict';

let express = require('express');
let router = express.Router();

// controllers
let test = rootRequire('api/controllers/ok');

// middleware
let checkName = rootRequire('api/middleware/checkName');

// define routes
router.get('/', checkName, ok);

// router.put('/', )

module.exports = router;