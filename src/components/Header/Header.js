import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__title">Intutive quiz hub</Link>
            <hr className="header__divider"/>
        </div>
    )
}

export default Header
