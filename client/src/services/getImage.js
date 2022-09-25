export default async function getImage(query) {
    const response = await fetch(`https://city-ranker-362600.uc.r.appspot.com/pexels/image/${query}`)
    const json = await response.json()
    return json.photos[0].src.original
}