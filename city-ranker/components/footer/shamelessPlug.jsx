import Link from 'next/link'

export default function ShamelessPlug() {
    // This is for my GitHub Icon Specifically. Could throw into the attribution area, but keeping here.
    const img = {
        width: '100%',
        height: '100%'
    }

    return (
        <>
            <div className='plugContainer'>
                <Link target='_blank' rel='noreferrer' href='https://github.com/mitchelldirt/City-Ranker'>
                    <p className='plugName'>MitchellDirt
                    </p></Link>
                <Link className='plugImageContainer' target='_blank' rel='noreferrer' href='https://github.com/mitchelldirt/City-Ranker'>
                    <img alt='GitHub Logo' style={img} src='/githubLogo.png' /></Link>
            </div>
        </>
    )
}