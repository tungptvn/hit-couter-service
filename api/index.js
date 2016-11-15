'use strict';

let express = require('express');
let router = express.Router();

// controllers
let ok = rootRequire('api/controllers/ok');

let hit = rootRequire('api/controllers/hit');

//middleware
let checkUrl = rootRequire('api/middleware/checkUrl');

// define routes
router.get('/', ok);
router.get('/hit', checkUrl, hit);
// router.put('/', )

module.exports = router;