import React from 'react'
import './Button.css'

export default function Botao(props) {
    return(
        <button onClick={e => props.click(props.label)} className={`
            button
            ${props.operation ? 'operation' : ''}
            ${props.double ? 'double' : ''}
            ${props.triple ? 'triple' : ''}  
        `}
        >
            {props.label}
        </button>
    )
}