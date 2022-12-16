import { useState } from 'react'
import { supabase } from '../services/supabaseClient.js'
import { signInWithGithub } from '../services/supabaseFunctions'

export default function Auth() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const { error } = await supabase.auth.signInWithOtp({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="row flex-center flex">
            <div className="col-6 form-widget" aria-live="polite">
                <h1 className="signInHeader">Sign In</h1>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <button
                        style={{ width: 'fit-content' }}
                        onClick={signInWithGithub}>
                        <img
                            style={{ width: '40px' }}
                            src='/githubLogo.png' />
                    </button>
                </div>
                <p className="description">
                    Sign in via 🪄 magic link 🔮 with your email below
                </p>
                {loading ? (
                    'Sending magic link...'
                ) : (
                    <>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="loginInput"
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button style={{ fontWeight: 'bold', marginTop: '10px', backgroundColor: 'black', color: 'white' }} aria-live="polite">
                                Send magic link
                            </button>
                        </form>
                        <a href='/'>
                            <button
                                style={{ fontWeight: 'bold', marginTop: '10px', backgroundColor: 'black', color: 'white' }}>
                                Cancel Login
                            </button>
                        </a>

                    </>

                )}
            </div>
        </div>
    )
}