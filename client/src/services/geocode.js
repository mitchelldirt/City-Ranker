export default async function getGeoInformation(address) {
    try {
        const response = await fetch(`http://localhost:9000/google/geocode/${address}`)
        let json = await response.json()
        // return only what information is necessary
        return {
            address: json.results[0].formatted_address,
            latitude: json.results[0].geometry.location.lat,
            longitude: json.results[0].geometry.location.lng
        }
    } catch(error) {
return [];
    }
}