export default function ShamelessPlug() {
    const p = {
        fontSize: '30px'
    }

    const img = {
        width: '32px',
        height: '32px'
    }

    return (
        <>
            <p style={p}>Mitchell Mudd <a target='_blank' href='https://github.com/mitchelldirt/City-Ranker/blob/main/README.md'>
                <img style={img} src='/src/assets/GitHub-Mark-120px-plus.png'></img></a></p>
        </>
    )
}