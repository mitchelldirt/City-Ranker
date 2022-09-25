export default async function getGeoInformation(address) {
    try {
        const response = await fetch(`https://city-ranker-362600.uc.r.appspot.com/google/geocode/${address}`)
        let json = await response.json()
        // return only what information is necessary
        return {
            address: json.results[0].formatted_address,
            latitude: json.results[0].geometry.location.lat,
            longitude: json.results[0].geometry.location.lng
        }
    } catch(error) {
return error;
    }
}