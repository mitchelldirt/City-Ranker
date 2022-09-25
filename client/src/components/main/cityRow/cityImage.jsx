export default function CityImage({imgURL}) {
    const imageStyles = {
        width: '200px',
        height: '200px',
        alignSelf: 'center'
    }
    return (
        <>
            <img alt='Image of the city mentioned on this city card' className='cityImage' src={imgURL} />
        </>
    )
}