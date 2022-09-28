import { useState, useEffect } from 'react';
import getGeoInformation from '../../services/geocode';
import getImage from '../../services/getImage';
import getWalkscore from '../../services/walkscore'
import ScoresContainer from './cityRow/ScoresContainer';
import CityImage from './cityRow/cityImage'
import { setInitialCityList, updateUserCityList } from '../../services/supabaseFunctions'
let nextId = 3;

// Avoiding top level await for compatibility. Using an async IIFE 
let initialCityList = setInitialCityList();


// Use the user input (should be a city name) to call 3 APIs and create the city object
async function createCityObject(userInput) {
    let googleResponse = await getGeoInformation(userInput);
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
    const [cities, setCities] = useState(null);

    // Fetch the initial list either off a user or from the default I set then when it's ready set it.
    useEffect(() => {
        setInitialCityList().then(data => {
            setCities(JSON.parse(data))
        });
    }, []);


    useEffect(() => {
        // Update the users list in supabase
        if (cities !== null) {
        updateUserCityList(cities)}
    });

    // if initial city list isn't ready show Loading...
    if (cities === null) {
        return <p>Loading...</p>
    }

    return (
        <>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <input
                    className='searchBar'
                    placeholder='Type a city name and hit the +'
                    aria-label='Input box for a city name to add to the list'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button id='addButton' aria-label='Plus symbol button to add a city to the city' onClick={async () => {
                    if (name === '') {
                        return;
                    }
                    setName('');
                    let city = await createCityObject(name);
                    setCities([
                        ...cities,
                        city
                    ]);
                }}><img aria-labelledby='addButton' style={{ width: '30px', height: '30px' }} src='/assets/addButton.svg' /></button>
            </div>

            <ol style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '40px'

            }}>

                {
                    cities.map((city) => (
                        <li className='card' key={city.id} >
                            <p className='cityNameMobile'>{city.cityName}</p>
                            <div className='nonScoresDiv'>
                                <button id={'deleteButton'.concat(city.id)} aria-label='Trash can button to delete a city from the list' style={{ alignSelf: 'center' }} onClick={() => { setCities(cities.filter(c => c.id !== city.id)) }}><img aria-labelledby={'deleteButton'.concat(city.id)} src='/assets/delete.svg' className='cardButton' /></button>

                                <div className='cardNav'>
                                    <button id={'upArrow'.concat(city.id)} aria-label='Up arrow button to move a city up one in the list' onClick={() => {
                                        let insertAt = cities.indexOf(city) - 1;
                                        let nextCities = [...cities]
                                        if (insertAt !== -1) {
                                            nextCities.splice(cities.indexOf(city), 1);
                                            nextCities.splice(insertAt, 0, city);
                                            setCities(nextCities);
                                        }
                                        return;
                                    }}><img aria-labelledby={'upArrow'.concat(city.id)} src='/assets/upArrow.svg' className='cardButton' /></button>
                                    <button id={'downArrow'.concat(city.id)} aria-label='Down arrow button to move a city down one in the list' onClick={() => {
                                        let insertAt = cities.indexOf(city) + 1;
                                        let nextCities = [...cities]
                                        if (insertAt < cities.length) {
                                            nextCities.splice(cities.indexOf(city), 1);
                                            nextCities.splice(insertAt, 0, city);
                                            setCities(nextCities);
                                        }
                                        return;
                                    }}><img aria-labelledby={'downArrow'.concat(city.id)} src='/assets/downArrow.svg' className='cardButton' /></button>

                                </div>
                                <CityImage imgURL={city.imageURL} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <p className='cityNameDesktop'>{city.cityName}</p>
                                <ScoresContainer
                                    walkScore={city.walkScore}
                                    bikeScore={city.bikeScore}
                                    transitScore={city.transitScore}
                                    cityID={city.id} />
                            </div>
                        </li>
                    ))
                }

            </ol>
        </>
    )
}