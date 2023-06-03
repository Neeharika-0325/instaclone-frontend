import React, { useState, useContext, useEffect } from "react";
import heart from '../../images/heart.png';
import message from '../../images/message.png'
import Navbar from "../Navbar";
//bootstrap
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';


// import Post from './Post'
import { PostList } from "./Post";
// const Node_Api=""

const BASE_URL = "https://instaclone-backend-74q8.onrender.com" 

export default function PostView(){
    // const [userPost, setUserPost] = useState([])
    const {posts} = useContext(PostList);
    // useEffect(()=>{
    //     getUserPosts()
    //         .then(data=>{
    //             setUserPost(data)
    //             console.log(data)
    //         })
    // }, [])
    // console.log(userPost)
    return<>
        <Navbar/>
        <div id="posts-container">
        {/* Drop your posts here */}
        {posts.length === 0 ? <h3>No posts yet</h3> : 
            posts.map((post)=>{
                return <div className="row m-3" key={post.id}>
                    <div className="col-12">
                        <Card className="post-card">
                            <Card.Header className="card-header">
                                <div col-5>
                                    <h4>{post.name}</h4>
                                    <label>{post.location}</label>
                                </div>
                                <div col-5>
                                    <span className='dot'>&#9679;&#9679;&#9679;</span>
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body">
                                {console.log(`${BASE_URL}/uploads/${post.image}`)}
                                <img src={`${BASE_URL}/uploads/${post.image}`} alt="post-img" />
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="wrapper">
                                    <div className="col-5">
                                        <div className="actions-icon">
                                            <div>
                                            <div className="padding-heart"><img src={heart} alt="heart_icon" /></div>
                                                <div className="padding-likes">
                                                    <p> {post.likes} likes</p>
                                                </div>
                                            </div>
                                            
                                            <div className="padding-heart"><img src={message} alt="msg" /></div>
                                        </div> 
                                    </div>
                                    <div className="col-5">
                                        <span className='date'>{post.date}</span>
                                    </div>
                                </div>
                                <div col-12 d-block>
                                    <h5> {post.description}</h5>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
            })
        }
        </div>
    </>
}

