import React from 'react'
import './Post.css';
import  Avatar  from '@mui/material/Avatar';


function Post() {
  return (
    <div className='post' >
        <Avatar
        className="post-avatar"
        alt='LaMb_Urueta'
        src="/static/images/avatar/1.jpg"
        />
        <h3>Username</h3>

        <img className='post_image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Mazda_rx7_veilside.jpg/2560px-Mazda_rx7_veilside.jpg' alt=""/>

        <h4 className='post_text'><strong>LaMB_Urueta</strong> Nice shit box </h4>
    </div>
  )
}

export default Post