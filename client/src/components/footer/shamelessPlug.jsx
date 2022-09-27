export default function ShamelessPlug() {
    // This is for my GitHub Icon Specifically. Could throw into the attribution area, but keeping here.

    const img = {
        width: '100%',
        height: '100%'
    }

    return (
        <>
            <div className='plugContainer'>
                <a target='_blank' href='https://github.com/mitchelldirt/City-Ranker'>
                    <p className='plugName'>MitchellDirt
                    </p></a>
                <a className='plugImageContainer' target='_blank' href='https://github.com/mitchelldirt/City-Ranker'>
                    <img alt='GitHub Logo' style={img} src='/assets/githubLogo.png' /></a>

            </div>
        </>
    )
}