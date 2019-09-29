import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderClean.css'

const HeaderClean = (props) => {
    return (
        <nav id='nav-clean'>
            <Link to='/'>
                <div id='header-logo-clean' />
            </Link>
        </nav>
    )
}

export default HeaderClean
