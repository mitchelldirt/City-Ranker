export default function Attribution({ text, resourceSrc, imgSrc }) {
    const imageStyles = {
        width: '150px',
        height: '50px'
    }

    return (
        <>
            <p>{text}<a href={resourceSrc} target='_blank'><img src={imgSrc} /></a></p>
            <p></p>
        </>
    )
}