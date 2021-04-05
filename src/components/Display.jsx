import React from 'react'
import './Display.css'

export default function Display(props) {
    return (
        <div className="display">{props.value}</div>
    )
}