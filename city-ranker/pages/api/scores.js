export default function handler(request, response) {
  const address = request.query.address;
  const lat = request.query.lat;
  const lon = request.query.lon;

  let options = {
    method: 'GET'
  };

  let url = `https://api.walkscore.com/score?format=json&address=${address}&lat=${lat}&lon=${lon}&transit=1&bike=1&wsapikey=${process.env.WALKSCORE}`;
  console.log(url)

  fetch(url, options)
    .then(res => res.json())
    .then(json => response.status(200).json({
      body: json,
      query: request.query,
      cookies: request.cookies,
    }))
    .catch(err => console.error('error:' + err));
}