import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import style from './scss/BaseModal.scss'
import 'components/scss/BaseModal.scss'

import BaseButton from "components/BaseButton"

// meta
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'

type Props = {
    visible: boolean,
    setVisible: any
}

const BaseModal = ({visible, setVisible}: Props) => {

    let rootClasses = 'BaseModal'
    if (visible === true) rootClasses += ' active'

    const { activateBrowserWallet, account, deactivate } = useEthers()

    const dispatch = useDispatch()

    const installMetamask = () => {
        activateBrowserWallet()
        dispatch({type: 'add_post', payload: account})
        console.log('here')
    }

    return (
        <div className={rootClasses}>
            <div className="container" onClick={(e: any) => e.stopPropagation()}>
                <div className="title">metamask extention</div>
                <div className="subtitle">To work with our application, you have to install the <span style={{color: '#E75626', cursor: 'pointer'}} onClick={installMetamask}> Metamask browser extension</span></div>
                <BaseButton onClick={() => setVisible(false)} className="button">Skip this step</BaseButton>
            </div>
        </div>
    )
}

export default BaseModal