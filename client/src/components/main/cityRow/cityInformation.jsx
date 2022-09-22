export default function CityInformation({imgURL, cityName}) {
    const divStyles = {
        height: '100px',
        width: '100px'
    }

    const imageStyles = {
        width: '200px',
        height: '200px'
    }
    return (
        <>

            <img style={imageStyles} src={imgURL} />
            <p>{cityName}</p>

        </>
    )
}