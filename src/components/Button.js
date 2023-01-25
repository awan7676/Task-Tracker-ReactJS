import React from 'react'

function Button({ onToggle, btnText }) {
    return (
        <div className={`btn ${btnText ? 'btn-green' : 'btn-red'}`} onClick={onToggle}>{btnText ? "Add" : "Close"}</div>
    )
}

export default Button