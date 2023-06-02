import React, { createContext, useEffect, useState } from "react";
import { getUserPosts } from "../../utils/apiUtils";

export const PostList=createContext();
export default function PostContext({children}){

    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        getUserPosts().then(res=>{
            setPosts(res.records);
        })
    }, [])

    return <PostList.Provider value={{
            posts: posts,
            addPost: (post)=>{
                const latestPost=[...posts, post];
                setPosts(latestPost);
            }
        }}>
        {children}
    </PostList.Provider>

}