export default async function getImage(query) {
    const response = await fetch(`http://localhost:9000/pexels/image/${query}`)
    const json = await response.json()
    return json.photos[0].src.original
}