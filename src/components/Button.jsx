import React from 'react'
import './Button.css'

export default function Botao(props) {
    return(
        <button className="button">{props.label}</button>
    )
}