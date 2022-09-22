import { useState } from 'react';
import getGeoInformation from '../../services/geocode';
import getImage from '../../services/getImage';
import getWalkscore from '../../services/walkscore'
import CityRow from './cityRow/cityRow';

let nextId = 3;

const testCityList = [
    { imageURL: 'https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Portland, OR USA', walkScore: '67', bikeScore: '49', transitScore: '83', id: 0 },
    { imageURL: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Seattle, WA USA', walkScore: '74', bikeScore: '60', transitScore: '71', id: 1 },
    { imageURL: 'https://images.pexels.com/photos/3876958/pexels-photo-3876958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Tucson, AZ USA', walkScore: '43', bikeScore: '35', transitScore: '66', id: 2 }
]



// Use the user input (should be a city name) to call 3 APIs and create the city object
async function createCityObject(userInput) {
    let googleResponse = await getGeoInformation(userInput);
    console.log(googleResponse)
    let imageURL = await getImage(`${googleResponse.address} City`);
    let scores = await getWalkscore(googleResponse.address, googleResponse.latitude, googleResponse.longitude);

    let city = {
        imageURL: imageURL,
        cityName: googleResponse.address,
        walkScore: scores.walkScore,
        bikeScore: scores.bikeScore,
        transitScore: +scores.transitScore,
        id: nextId++
    }

    return city;
}

export default function CityList() {
    const [name, setName] = useState('');
    const [cities, setCities] = useState(testCityList)

    function handleDelete(badCity) {

    }

    function handleUpShift(movingCity) {
        let insertAt = cities.indexOf(movingCity) - 1;
        if (indexOfMovingCity => 0) {
            const nextCity = [
                ...cities.slice(0, insertAt),
                movingCity,
                ...cities.slice(insertAt)
            ]
            setCities(nextCity);
        }
        return;
    }

    function handleDownShift() {

    }

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={async () => {
                setName('');
                let city = await createCityObject(name);
                console.log(city)
                setCities([
                    ...cities,
                    city
                ]);
            }}>Add</button>

            <div>
                {cities.map((city) => (
                    <li key={city.id} >
                        <CityRow
                            imgURL={city.imageURL}
                            cityName={city.cityName}
                            walkScore={city.walkScore}
                            bikeScore={city.bikeScore}
                            transitScore={city.transitScore} />

                        <button onClick={() => { setCities(cities.filter(c => c.id !== city.id)) }}>Delete</button>

                        <button onClick={() => {
                            let insertAt = cities.indexOf(city) - 1;
                            let nextCities = [...cities]
                            if (insertAt => 0) {
                                nextCities.splice(cities.indexOf(city), 1);
                                nextCities.splice(insertAt, 0, city);
                                setCities(nextCities);
                            }
                            return;
                        }}>Up Shift</button>
                        <button onClick={() => {
                            let insertAt = cities.indexOf(city) + 1;
                            let nextCities = [...cities]
                            if (insertAt < cities.length) {
                                nextCities.splice(cities.indexOf(city), 1);
                                nextCities.splice(insertAt, 0, city);
                                setCities(nextCities);
                            }
                            return;
                        }}>Down Shift</button>

                    </li>
                ))}
            </div>
        </>
    )
}