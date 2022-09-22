import { useState } from 'react';
import getGeoInformation from '../../services/geocode';
import getImage from '../../services/getImage';
import getWalkscore from '../../services/walkscore'
import CityRow from './cityRow/cityRow';

let nextId = 0;

// Use the user input (should be a city name) to call 3 APIs and create the city object
async function createCityObject(userInput) {
    let googleResponse = await getGeoInformation(userInput);
    let imageURL = await getImage(googleResponse.address);
    let scores = await getWalkscore(googleResponse.address, googleResponse.latitude, googleResponse.longitude);

    let city =  {
        imageURL: imageURL,
        cityName: googleResponse.address,
        walkScore: scores.walkScore,
        bikeScore: scores.bikeScore,
        transitScore: +scores.transitScore
    }

    return city;
}

export default function CityList() {
    const [name, setName] = useState('');
    const [cities, setCities] = useState([])

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={async () => {
                setName('');
                let city = await createCityObject(name);
                city.id = nextId++
                console.log(city)
                setCities([
                    ...cities,
                    city
                ]);
            }}>Add</button>

        <div>
            {cities.map(city => (
                <CityRow key={city.id} imgURL={city.imageURL} cityName={city.cityName} walkScore={city.walkScore} bikeScore={city.bikeScore} transitScore={city.transitScore} />
            ))}
        </div>
        </>
    )
}