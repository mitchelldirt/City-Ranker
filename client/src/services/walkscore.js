export default async function getWalkscore(address, lat, lon) {
    const response = await fetch(`http://localhost:9000/walkscore/${address}/${lat}/${lon}`);
    const json = await response.json();
    return json;
}