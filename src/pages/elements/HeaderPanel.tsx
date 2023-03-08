import React from "react"
import { Link } from "react-router-dom"

// UI
import BaseButton from "components/BaseButton"
import { ReactComponent as Logo } from "assets/icons/planet.svg"

// component
import Navbar from "pages/elements/Navbar"

// style
import 'pages/scss/main.scss'

const HeaderPanel = () => {
    const renderItems = 
        [{key: 10, text: 'Lorem ipsum dolor'}, {key: 11, text: 'Lorem ipsum dolor'}, {key: 12, text: 'Lorem ipsum dolor'}]
        .map((item, index) => 
        <div key={index}> 
            <div className="title">{item.key}</div> 
            <div className="value">{item.text}</div>
        </div>
    )

    return (
        <div>
            <Navbar />
            <div className="title_context">
                <div className="left_side">
                    <div className="left_side_content">
                        <div className="left_side_title">Explore Your own planet In our New metaverse</div>
                        <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    </div>

                    <Logo className="logo_planet" width="400" heigth="400"></Logo>
                </div>
                
                <div className="right_side">
                    <div className="right_side_title">Roadmap stats</div>
                    <div className="right_side_box">
                        {renderItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPanel