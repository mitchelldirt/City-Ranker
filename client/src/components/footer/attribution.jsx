export default function Attribution({imgSrc }) {
    const imageStyles = {
        width: '100%',
        height: '100%',
        maxWidth: '230px',
        maxHeight: '60px'
    }

    return (
        <>      
                <img style={imageStyles} src={imgSrc} />
        </>
    )
}