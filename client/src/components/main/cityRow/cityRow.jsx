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
                    <p style={{
                        fontSize: '1.5em',
                        fontWeight: 'bold'
                    }}>{cityName}</p>
                    <div style={{
                        display: 'flex'
                    }}>
                        <div className='scoreContainer'>
                            <img src='/src/assets/walk.svg' />
                            <Pie percentage={walkScore} colour="blue" />
                        </div>

                        <div className='scoreContainer'>
                            <img src='/src/assets/bike.svg' />
                            <Pie percentage={bikeScore} colour="blue" />
                        </div>

                        <div className='scoreContainer'>
                            <img src='/src/assets/train.svg' />
                            <Pie percentage={transitScore} colour="blue" />
                        </div>
                    </div>
                </div>
                {/*<Score degrees={(180 / 100) * walkScore} percent={walkScore} />
                <Score degrees={(180 / 100) * bikeScore} percent={bikeScore} />
                <Score degrees={(180 / 100) * transitScore} percent={transitScore} >*/}
            </div>
        </>
    )
}