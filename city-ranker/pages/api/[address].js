export default function handler(request, response) {
    response.status(200).json({
      body: request.body,
      query: request.query,
      cookies: request.cookies,
    });
  }
  

// router.get('/:address', function (req, res, next) {

//     let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.address}&key=${process.env.GOOGLE}`;

//     let options = { method: 'GET' };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(err => console.error('error:' + err));
// });

// module.exports = router;
