export default async function getImage(query) {
    const response = await fetch(`/api/image/${query}`)
    const json = await response.json()
    return json.body.photos[0].src.original
}