const Flight = require('../models/flight')
module.exports = {
    new: newFlight,
    create
}

function create(req, res) {
    res.render('flights/')
}
function newFlight(req, res) {
    res.render('flights/new')
}
