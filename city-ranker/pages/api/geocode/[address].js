export default function handler(request, response) {
  const { address } = request.query;
  let options = { method: 'GET' };
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE}`;
  console.log(address)
  fetch(url, options)
    .then(res => res.json())
    .then(json => response.status(200).json({
      body: json,
      query: request.query,
      cookies: request.cookies,
    }))
    .catch(err => console.error('error:' + err));
}


// router.get('/:address', function (req, res, next) {

//     

//     let options = { method: 'GET' };

//     fetch(url, options)
//         .then(res => res.json())
//         .then(json => res.send(json))
//         .catch(err => console.error('error:' + err));
// });

// module.exports = router;
