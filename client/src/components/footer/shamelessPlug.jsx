export default function ShamelessPlug() {
    const p = {
        fontSize: '2em',
        margin: '0',

    }

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