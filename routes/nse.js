var express = require('express');
var router = express.Router();
const { nse } = require('../data');
/* GET historical prices */
router.get('/', function(req, res, next) {
    const symbol = req.query.symbol;
    const result = nse[symbol];
    if(!result) {
        res.status(404);
    }
    res.json(result);
});

module.exports = router;
