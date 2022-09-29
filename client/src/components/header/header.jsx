import Title from './title'

export default function Header() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Title />
                <p style={{
                    marginTop: '0px'
                }}>An application to rank your favorite cities 😄</p>
            </div>
        </>
    )
}