import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    render() {
        return(
            <div className="calculator">
                <Display value={100}/>
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
                <Button label="AC" />
            </div>
        )
    }
}