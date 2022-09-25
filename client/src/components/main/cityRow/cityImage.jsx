export default function CityImg({imgURL}) {
    const imageStyles = {
        width: '200px',
        height: '200px',
        alignSelf: 'center'
    }
    return (
        <>
            <img style={imageStyles} src={imgURL} />
        </>
    )
}