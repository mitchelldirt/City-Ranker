var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.get('/:address', function (req, res, next) {

    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.address}&key=`;

    let options = { method: 'GET' };

    fetch(url, options)
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(err => console.error('error:' + err));
});

module.exports = router;
