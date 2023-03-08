import React from "react"
import './scss/BaseInput.scss'

const BaseInput = (props: any) => {
    
    return (
        <div className="input_box">
            <label className="header">{props.header}</label>
            <input className="input" {...props} />
        </div>
    )
}

export default BaseInput