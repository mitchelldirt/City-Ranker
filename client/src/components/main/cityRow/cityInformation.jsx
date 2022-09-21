export default function CityInformation({imgURL, cityName}) {
    const divStyles = {
        height: '100px',
        width: '100px'
    }
    return (
        <>

            <img src={imgURL} />
            <p>{cityName}</p>

        </>
    )
}