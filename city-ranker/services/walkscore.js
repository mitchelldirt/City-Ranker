export default async function getWalkscore(address, lat, lon) {
    const response = await fetch(`/api/scores?address=${address}&lat=${lat}&lon=${lon}`);
    const json = await response.json();
    let properties = ['walkscore', 'bike', 'transit'];
    let newProperties = [];

    // Check if each property exists. If it doesn't return 0 for that score.
    properties.forEach(prop => {
        if (json.body.hasOwnProperty(prop)) {
            let result = prop == 'walkscore' ? json.body[prop] : json.body[prop].score;
            newProperties.push(result)
        } else {
            newProperties.push(0)
        }
    })

    return {
        walkScore: newProperties[0],
        bikeScore: newProperties[1],
        transitScore: newProperties[2]
    }
}