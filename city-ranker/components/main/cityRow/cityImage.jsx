export default function CityImage({ imgURL }) {
    return (
        <>
            <img alt='Image of the city mentioned on this city card' className='cityImage' src={imgURL} />
        </>
    )
}