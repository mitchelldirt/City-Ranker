// var express = require('express');
// var router = express.Router();
// require('dotenv').config();

// router.get('/:address/:lat/:lon', function (req, res, next) {
//     const fetch = require('node-fetch');

//     let url = `https://api.walkscore.com/score?format=json&address=${req.params.address}&lat=${req.params.lat}&lon=${req.params.lon}&transit=1&bike=1&wsapikey=${process.env.WALKSCORE}`;

//     let options = { method: 'GET' };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(err => console.error('error:' + err));
// });

// module.exports = router;