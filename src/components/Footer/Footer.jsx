import React from 'react'
import './footer.css'

const Footer = () => {
    const currentYear = new Date().getUTCFullYear()
    return (
        <footer className='footer'>
            <p>John Wiley & Sons, Inc. {currentYear}</p>
        </footer>
    )
}

export default Footer