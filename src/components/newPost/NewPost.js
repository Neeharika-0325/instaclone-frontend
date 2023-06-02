import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import '../styles/styles.css'
import  {newPost} from "../../utils/apiUtils";
import {PostList} from "../PostViewPage/Post";
// import dotenv from 'dotenv';
// dotenv.config();


const random_number=  Math.floor(Math.random() * 1000) + 1;
export default function NewPost(){
    const navigate = useNavigate();
    const {addPost} = useContext(PostList);
    const [formData, setFormData] = useState({
        image: null,
        name: "",
        location: "",
        description: ""
    })
    // console.log(formData)
    function formHandler(event){
        event.preventDefault()
        const data = new FormData(event.target);
        data.append("date", new Date().toDateString());
        data.append("likes", random_number);
        data.append("id", (""+ new Date().getTime()));
        newPost(data).then(res => {
            if(res.status==="Success"){
            addPost(res.record);
            setFormData({
                image: null,
                name: "",
                location: "",
                description: ""
            });
            navigate("/all")
        }
        else {
            console.log("failed to load POST dat" );
        }
    });
       
    }

    return (
        <>
            <Navbar/>
            <div className="form-container">
                <form onSubmit={formHandler} id="container">
                    <input 
                        type="file"
                        name="image"
                        accept="image/*" 
                        required
                        onChange={e=>{
                            setFormData(previous => {
                                return {
                                    ...previous,
                                    image: e.target.files[0]
                                }
                            })
                        }}
                    />
                    <input 
                        type="text"
                        name="name"
                        placeholder="Author" 
                        required
                        value={formData.name}
                        onChange={e=>{
                            setFormData(previous=>{
                                return{
                                    ...previous,
                                    name: e.target.value
                                }
                            })

                        }}
                    />
                    <input 
                        type="text"
                        name="location"
                        placeholder="Location" 
                        required
                        value={formData.location}
                        onChange={e=>{
                            setFormData(previous=>{
                                return{
                                    ...previous,
                                    location: e.target.value
                                }
                            })

                        }}
                    />
                    <input 
                        type="text"
                        name="description" 
                        placeholder="Descirption" 
                        required
                        value={formData.description}
                        onChange={e=>{
                            setFormData(previous=>{
                                return{
                                    ...previous,
                                    description: e.target.value
                                }
                            })

                        }}
                    />
                    <button id="button">Post</button>
                </form>
            </div>
            
        </>
        
    )
}