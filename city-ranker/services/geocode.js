export default async function getGeoInformation(address) {
    try {
        const response = await fetch(`/api/geocode/${address}`)
        let json = await response.json()
        // return only what information is necessary
        return {
            address: json.body.results[0].formatted_address,
            latitude: json.body.results[0].geometry.location.lat,
            longitude: json.body.results[0].geometry.location.lng
        }
    } catch (error) {
        return error;
    }
}