import React, { Component } from 'react'
import SimpleBlueButton from '../SimpleBlueButton/SimpleBlueButton'
import SimpleRedButton from '../SimpleRedButton/SimpleRedButton'
import './BlueRedButtonGroup.scss'

//Set text props for this component
class BlueRedButtonGroup extends Component {

    render() {
        return (
            <div className="Root_Blue_Red_Button_Group">
                <SimpleBlueButton text={this.props.blueText}></SimpleBlueButton>
                <div className="Root_Blue_Red_Button_Group_Distance"></div>
                <SimpleRedButton text={this.props.redText}></SimpleRedButton>
            </div>
        )
    }
}

export default BlueRedButtonGroup;
