import CityImg from './cityImage'
import Score from './scores'
import Pie from './scores2'

export default function CityRow({ imgURL, cityName, walkScore, bikeScore, transitScore }) {
    const cityCard = {
        display: 'flex',
        height: 'fit-content'
    }

    return (
        <>
            <div style={cityCard}>
                <CityImg imgURL={imgURL} />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <p>{cityName}</p>
                    <div>
                        <Pie percentage={walkScore} colour="blue" />
                        <Pie percentage={bikeScore} colour="blue" />
                        <Pie percentage={transitScore} colour="blue" />
                    </div>
                </div>
                {/*<Score degrees={(180 / 100) * walkScore} percent={walkScore} />
                <Score degrees={(180 / 100) * bikeScore} percent={bikeScore} />
                <Score degrees={(180 / 100) * transitScore} percent={transitScore} >*/}
            </div>
        </>
    )
}