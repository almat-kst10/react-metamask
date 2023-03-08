import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from 'react-redux'; 
import { store } from 'store/store'

import './index.css';
import App from './App';
import Main from 'pages/Main'

// component
import PersonalData from 'pages/PersonalData'

// metamask
import { Mainnet, DAppProvider, Config, Goerli } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'
import { getDefaultProvider } from 'ethers'

const config: Config = {
    readOnlyChainId: Mainnet.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Goerli.chainId]: getDefaultProvider('goerli'),
    },
  }

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />
    },
    {
        path: "/about",
        element: <PersonalData />
    },
])

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement )

root.render(
    <DAppProvider config={config}>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </DAppProvider>
)
