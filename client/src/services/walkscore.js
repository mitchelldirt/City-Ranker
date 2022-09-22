export default async function getWalkscore(address, lat, lon) {
    const response = await fetch(`http://localhost:9000/walkscore/${address}/${lat}/${lon}`);
    const json = await response.json();
    return {
        walkScore: json.walkscore,
        bikeScore: json.bike.score,
        transitScore: `${json.transit.score == null ? 75 : json.transit.score}`
    }
}