// var express = require('express');
// var router = express.Router();
// require('dotenv').config();

// router.get('/:query', function (req, res, next) {
//     const fetch = require('node-fetch');

//     let url = `https://api.pexels.com/v1/search?query=${req.params.query}&per_page=1`;

//     let options = {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${process.env.PEXELS}`
//         }
//     };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(err => console.error('error:' + err));
// });

// module.exports = router;
