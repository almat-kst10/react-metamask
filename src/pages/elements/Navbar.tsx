import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

// UI
import BaseButton from "components/BaseButton"
import BaseModal from "components/BaseModal"
// scss
import 'pages/scss/elements/Navbar.scss'

// meta
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'

const Navbar = () => {

    const [modal, setModal] = useState(false)
    const dispatch = useDispatch()

    const { activateBrowserWallet, account, deactivate } = useEthers()

    useEffect(() => {
        if (!account) {
            setModal(true)
        }
    }, [])

    const connectMeta = () => {
        activateBrowserWallet()
    }

    return (
        <div className="header_content">
            <div className="logo">LOGO</div>
            {   
                account
                ? 
                <div className="account" onClick={() => deactivate()}>{account}</div>
                :
                <div>
                    <BaseButton onClick={connectMeta}>Connect metamask</BaseButton>
                    <BaseModal visible={modal} setVisible={setModal}></BaseModal>
                </div>
            }
        </div>
    )
}

export default Navbar