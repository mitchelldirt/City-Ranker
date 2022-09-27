import { useState, useEffect } from 'react';
import getGeoInformation from '../../services/geocode';
import getImage from '../../services/getImage';
import getWalkscore from '../../services/walkscore'
import CityRow from './cityRow/cityRow';
import CityImage from './cityRow/cityImage'
import { getProfile } from '../../App'
import { supabase } from '../../services/supabaseClient'
let nextId = 3;



async function setInitialCityList() {
    const data = await supabase.auth.getSession();
    if (data.data.session) {
        const profile = await getProfile(data.data.session);
        const cityList = await profile[0].city_list;
        console.log(cityList)
        return cityList;
    }
    return JSON.stringify([
        { imageURL: 'https://images.pexels.com/photos/432361/pexels-photo-432361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Portland, OR USA', walkScore: '62', bikeScore: '49', transitScore: '83', id: 0 },
        { imageURL: 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Seattle, WA USA', walkScore: '74', bikeScore: '60', transitScore: '71', id: 1 },
        { imageURL: 'https://images.pexels.com/photos/3876958/pexels-photo-3876958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', cityName: 'Tucson, AZ USA', walkScore: '43', bikeScore: '35', transitScore: '66', id: 2 }
    ])
}

async function updateUserCityList(cityList) {
    const user = await supabase.auth.getSession();
    if (user.data.session) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .update({ city_list: JSON.stringify(cityList) })
                .match({ id: user.data.session.user.id })

            if (error) {
                throw error
            }
        } catch (error) {
            alert(error.message)
        }
    }
    return;
}

const initialCityList = await (setInitialCityList());
console.log(initialCityList)

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
    const [cities, setCities] = useState(JSON.parse(initialCityList));

    useEffect(() => {
        // Update the users list in supabase
        updateUserCityList(cities)
    });

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
                    console.log(city)
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
                                        console.log(insertAt)
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
                                <CityRow
                                    imgURL={city.imageURL}
                                    cityName={city.cityName}
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