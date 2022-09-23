export default function ShamelessPlug() {
    const p = {
        fontSize: '30px',
        margin: '0'
    }

    const img = {
        width: '32px',
        height: '32px'
    }

    return (
        <>
            <a target='_blank' href='https://github.com/mitchelldirt/City-Ranker'>
                <p style={p}>Mitchell Mudd<img style={img} src='/src/assets/githubLogo.png' />
                </p></a>
        </>
    )
}