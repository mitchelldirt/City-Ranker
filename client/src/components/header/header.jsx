import React from 'react'
import Title from './title'

export default function Header() {
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Title />
                <p style={{
                    marginTop: '0px'
                }}>An application to rank your favorite cities 😄</p>
            </div>
        </>
    )
}