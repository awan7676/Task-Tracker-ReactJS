import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from './Button'

function Header({ onToggle, btnText }) {
    const currentLocation = useLocation();
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            {currentLocation.pathname === '/' && <Button onToggle={onToggle} btnText={btnText} />}
        </div>
    )
}

export default Header