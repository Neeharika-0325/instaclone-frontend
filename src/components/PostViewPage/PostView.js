import React, {useEffect, useState} from 'react'
import Navbar from "../Navbar";
import Post from './Post'
import { getUserPosts } from "../../utils/apiUtils";

export default function PostView(){
    const [userPost, setUserPost] = useState([])
    useEffect(()=>{
        getUserPosts()
            .then(data=>{
                setUserPost(data)
                console.log(data)
            })
    }, [])
    console.log(userPost)
    return<>
        <Navbar/>
        <div id="posts-container">
        {/* Drop your posts here */}
        {userPost.map((post)=>{
            return <Post key={post.id} post={post}/>
        })}
    </div>
    </>
}

