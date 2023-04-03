export default function handler(request, response) {
  const { query } = request.query;

  let options = {
    method: 'GET',
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_PEXELS}`
    }
  };

  let url = `https://api.pexels.com/v1/search?query=${query}&per_page=1`;

  fetch(url, options)
    .then(res => res.json())
    .then(json => response.status(200).json({
      body: json,
      query: request.query,
      cookies: request.cookies,
    }))
    .catch(err => console.error('error:' + err));
}
