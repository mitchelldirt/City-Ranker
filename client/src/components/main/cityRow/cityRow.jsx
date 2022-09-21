import CityInformation from './cityInformation'
import Score from './scores'

export default function CityRow({ imgURL, cityName, walkScore, bikeScore, transitScore }) {
    const cityCard = {
        display: 'flex',
        border: '2px solid gray'
    }
    
    return (
        <>
            <div style={cityCard}>
                <CityInformation imgURL={imgURL} cityName={cityName} />
                <Score degrees={(180 / 100) * walkScore} percent={walkScore} />
                <Score degrees={(180 / 100) * bikeScore} percent={bikeScore} />
                <Score degrees={(180 / 100) * transitScore} percent={transitScore} />
            </div>
        </>
    )
}