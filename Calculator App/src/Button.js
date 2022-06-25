import React from 'react'
import './App.css'

function Button({ id, className, value, onClick, isDecimal, theme }) {
    return (
        <button
            id={id}
            className={`button ${className} ${theme}`}
            onClick={onClick}
            disabled={isDecimal === false}
        >
            {value}
        </button>
    )
}

export default Button