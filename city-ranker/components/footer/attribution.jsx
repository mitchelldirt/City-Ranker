import Image from 'next/image'

export default function Attribution({ imgSrc, aria }) {
    const imageStyles = {
        width: '100%',
        height: '100%',
        maxWidth: '230px',
        maxHeight: '60px'
    }

    return (
        <>
            <img alt='Tech Company Logo' aria-labelledby={aria} style={imageStyles} src={imgSrc} />
        </>
    )
}