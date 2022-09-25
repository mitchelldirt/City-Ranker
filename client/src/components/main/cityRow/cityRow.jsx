import CityImg from './cityImage'
import Pie from './scores'

export default function CityRow({ imgURL, cityName, walkScore, bikeScore, transitScore }) {

    return (
        <>

                <div className='scoresContainer'>
                    <div className='scoreContainer'>
                        <img src='/assets/walk.svg' />
                        <Pie percentage={walkScore} colour="blue" />
                    </div>

                    <div className='scoreContainer'>
                        <img src='/assets/bike.svg' />
                        <Pie percentage={bikeScore} colour="blue" />
                    </div>

                    <div className='scoreContainer'>
                        <img src='/assets/train.svg' />
                        <Pie percentage={transitScore} colour="blue" />
                    </div>
                {/*<Score degrees={(180 / 100) * walkScore} percent={walkScore} />
                <Score degrees={(180 / 100) * bikeScore} percent={bikeScore} />
                <Score degrees={(180 / 100) * transitScore} percent={transitScore} >*/}
            </div>
        </>
    )
}