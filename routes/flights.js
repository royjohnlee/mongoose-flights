var express = require('express');
const { route } = require('.');
var router = express.Router();
var flightsCtrl = require('../controllers/flights')

// All Routes start with `/flights`

// GET /flights
router.get('/', flightsCtrl.index)

// GET /fligts/new
router.get('/new', flightsCtrl.new)

// POST /flights
router.post('/', flightsCtrl.create)

module.exports = router;
