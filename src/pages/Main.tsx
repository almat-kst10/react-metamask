import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

// UI - components
import BaseInput from "components/BaseInput"
import BaseButton from "components/BaseButton"
import BaseModal from "components/BaseModal"

// components
import HeaderPanel from "pages/elements/HeaderPanel"
import PersonalList from "pages/elements/PersonalList"

// style
import 'pages/scss/main.scss'

// meta
import { Mainnet, DAppProvider, useEtherBalance, useEthers, Config, Goerli } from '@usedapp/core'

const Main = () => {
    const postStore = useSelector((state: any) => state.postReducer)

    const [isForm, setIsForm] = useState(true)
    const [form, setForm] = useState({username: '', email: '', address: ''})
    const [posts, setPost]: any = useState([])
    const [modal, setModal] = useState(false)

    const dispatch = useDispatch()
    const { account } = useEthers()

    const addNewPost = () => {
        if (form.username === '' || form.email === '') {
            window.alert('miss name or email')
            return
        }

        setForm({...form, address: account || 'Нет данных'})
        setPost([form, ...posts])
        setIsForm(false)

        dispatch({type: 'add_post', payload: form})
    }

    const fetchData = () => {
        const url = 'https://new-backend.unistory.app/api/data?page=0&perPage=20'
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            setPost(data.items)
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="Main">
            <HeaderPanel />
            {
                isForm 
                ? 
                <div className="body_content">
                    <div className="info">
                        <div className="body_content_title">Beta test registration</div>
                        <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                        <form action="submit">
                            <BaseInput onChange={(e: any) => setForm({...form, username: e.target.value})} header="name" placeholder="We will display your name in participation list" />
                            <BaseInput onChange={(e: any) => setForm({...form, email: e.target.value})} header="email" placeholder="We will display your email in participation list" />
                            <BaseButton onClick={addNewPost} className="button">Get early access</BaseButton>
                        </form>
                    </div>
                </div>
                :
                <div className="body_content">
                    <div className="info">
                        <div className="body_content_title">Beta test registration</div>
                        <div className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                        <div className="form">
                            <div className="form_item">
                                <div className="form_label">Name</div>
                                <div className="form_value">{form.username}</div>
                            </div>
                            <div className="form_item">
                                <div className="form_label">Email</div>
                                <div className="form_value">{form.email}</div>
                            </div>
                            <BaseButton className="button" style={{opacity: '0.5'}}><Link to="/about">About page</Link></BaseButton>
                        </div>
                    </div>
                    <PersonalList created={form} posts={posts} />
                </div>
            }
        </div>
    )
}

export default Main