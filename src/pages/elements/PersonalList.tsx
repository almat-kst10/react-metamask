import React, { useState } from "react"
import '../scss/elements/PersonalList.scss'

const PersonalList = ({created, posts}: any) => {
    const [ownPosts, setOwnPosts] = useState(posts)

    const deleteFirst = (index: any) => {
        setOwnPosts(ownPosts.filter((x: any) => x.username !== index.username))
    }

    return (
        <div className="PersonalList">
            <div className='headers'>Participation listing (enable only for participants)</div>
            <div className='row'>
                <div className='row_header'>
                    <div className='title'>Name</div>
                    <div className='title'>Email</div>
                    <div className='title'>Wallet</div>
                </div>
                {
                    ownPosts.map((post: any, index: any) => {
                        return (
                            <div className='row_body' key={post.username} style={{color: post.username === created.username ? '#E75626' : ''}}>
                                <div className='value'>{post.username}</div>
                                <div className='value'>{post.email}</div>
                                <div className='value'>{post.address}</div>
                                
                                {post.username === created.username ? <div onClick={() => deleteFirst(post)}>&#10005;</div> : ''}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PersonalList