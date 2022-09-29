import Pie from './scores'

export default function ScoresContainer({ walkScore, bikeScore, transitScore, cityID }) {

    return (
        <>
            <div className='scoresContainer'>
                <div className='scoreContainer'>
                    <img alt={'Walking Icon for walk score'.concat(cityID)} src='/assets/walk.svg' />
                    <Pie percentage={walkScore} colour="blue" />
                </div>

                <div className='scoreContainer'>
                    <img alt={'Biking Icon for bike score'.concat(cityID)} src='/assets/bike.svg' />
                    <Pie percentage={bikeScore} colour="blue" />
                </div>

                <div className='scoreContainer'>
                    <img alt={'Train Icon for transit score'.concat(cityID)} src='/assets/train.svg' />
                    <Pie percentage={transitScore} colour="blue" />
                </div>
            </div>
        </>
    )
}