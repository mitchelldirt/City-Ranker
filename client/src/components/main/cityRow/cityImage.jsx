export default function CityImage({imgURL}) {
    const imageStyles = {
        width: '200px',
        height: '200px',
        alignSelf: 'center'
    }
    return (
        <>
            <img className='cityImage' src={imgURL} />
        </>
    )
}