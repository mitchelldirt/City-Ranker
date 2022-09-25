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

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <input
                    style={{
                        borderRadius: '25px',
                        width: '300px',
                        height: '30px'
                    }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button onClick={async () => {
                    if (name === '') {
                        return;
                    }
                    setName('');
                    let city = await createCityObject(name);
                    console.log(city)
                    setCities([
                        ...cities,
                        city
                    ]);
                }}><img style={{ width: '30px', height: '30px' }} src='/assets/addButton.svg' /></button>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'

            }}>
                {cities.map((city) => (
                    <li className='card' key={city.id} >
                        <button style={{ alignSelf: 'center' }} onClick={() => { setCities(cities.filter(c => c.id !== city.id)) }}><img src='/assets/delete.svg' /></button>

                        <div className='cardNav'>
                            <button onClick={() => {
                                let insertAt = cities.indexOf(city) - 1;
                                console.log(insertAt)
                                let nextCities = [...cities]
                                if (insertAt !== -1) {
                                    nextCities.splice(cities.indexOf(city), 1);
                                    nextCities.splice(insertAt, 0, city);
                                    setCities(nextCities);
                                }
                                return;
                            }}><img src='/assets/upArrow.svg' /></button>
                            <button onClick={() => {
                                let insertAt = cities.indexOf(city) + 1;
                                let nextCities = [...cities]
                                if (insertAt < cities.length) {
                                    nextCities.splice(cities.indexOf(city), 1);
                                    nextCities.splice(insertAt, 0, city);
                                    setCities(nextCities);
                                }
                                return;
                            }}><img src='/assets/downArrow.svg' /></button>

                        </div>
                        <CityRow
                            imgURL={city.imageURL}
                            cityName={city.cityName}
                            walkScore={city.walkScore}
                            bikeScore={city.bikeScore}
                            transitScore={city.transitScore} />
                    </li>
                ))}
            </div>
        </>
    )
}