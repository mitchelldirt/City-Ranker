import { logOut } from '../../services/supabaseFunctions'

export default function LogOut({onClick}) {
    return (
        <a className='login' onClick={onClick}>
            <div style={{
                border: '1px solid black',
                borderRadius: '25px',
                display: 'flex',
                alignItems: 'center',
                padding: '5px'
            }}>
                <button className='loginButton' style={{ color: 'black', fontWeight: 'bold' }}>
                    LOGOUT
                </button>
                <img style={{cursor: 'pointer'}} src='/assets/logout.svg' />
            </div>
        </a>
    )
}