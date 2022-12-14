import Link from 'next/link'

export default function LogIn() {
    return (
        <Link className='login' href='/auth'>
            <div style={{
                border: '1px solid black',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                padding: '5px'
            }}>
                <button className='loginButton' style={{ color: 'black', fontWeight: 'bold', fontSize: '10px' }}>
                    LOGIN
                </button>
                <img style={{ cursor: 'pointer', width: '24px' }} src='/login.svg' />
            </div>
        </Link>
    )
}