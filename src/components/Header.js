import React from 'react'
import Button from './Button'

function Header({ onToggle, btnText }) {
    return (
        <div className='header'>
            <h1>Task Tracker</h1>
            <Button onToggle={onToggle} btnText={btnText} />
        </div>
    )
}

export default Header