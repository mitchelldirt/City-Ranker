

export default function LogIn() {
    return (
        <a className='login' href='/login'>
            <div style={{
                border: '1px solid black',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                padding: '5px'
            }}>
                <button className='loginButton' style={{ color: 'black', fontWeight: 'bold' }}>
                    LOGIN
                </button>
                <img style={{cursor: 'pointer'}} src='/assets/login.svg' />
            </div>
        </a>
    )
}