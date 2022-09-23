export default function Attribution({resourceSrc, imgSrc }) {
    const imageStyles = {
        width: '100%',
        height: '100%'
    }

    const paragraphStyles = {
        fontSize: '1.5rem'
    }
    return (
        <>
            <a href={resourceSrc} target='_blank'>
                <img style={imageStyles} src={imgSrc} /></a>
        </>
    )
}