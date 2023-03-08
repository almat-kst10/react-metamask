import React from "react"
import { useSelector } from "react-redux"
// component
import Navbar from "pages/elements/Navbar"

// scss
import 'pages/scss/personalData.scss'

const PersonalData = () => {
    const postStore = useSelector((state: any) => state.postReducer)

    return (
        <div className="PersonalData">
            <Navbar />
            <div className="body_content_title">Personal data</div>
            <div className="body_info">
                <div className="body_info_box">
                    <div className="body_info_title">Name</div>
                    <div className="body_info_value">{postStore.username}</div>
                </div>
                <div className="body_info_box">
                    <div className="body_info_title">Email</div>
                    <div className="body_info_value">{postStore.email}</div>
                </div>
                <div className="body_info_box">
                    <div className="body_info_title">Wallet</div>
                    <div className="body_info_value">{postStore.address}</div>
                </div>
            </div>
        </div>
    )
}

export default PersonalData