import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import '../styles/styles.css'
import { newPost } from "../../utils/apiUtils";

export default function NewPost(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: null,
        name: "",
        location: "",
        description: ""
    })
    
    function formHandler(e){
        e.preventDefault()
        console.log(formData)
        newPost(formData).then(res => {
            if(res.status==="Success"){
            // addPost(res.result);
            setFormData({
                image: null,
                name: "",
                location: "",
                description: ""
            });
            navigate('/all')
            }   
            else{

            }
            })
        }

    return (
        <>
            <Navbar/>
            <div className="form-container">
                <form onSubmit={formHandler} id="container">
                    <input 
                        type={"file"} 
                        name="PostImage" 
                        id="input_file" 
                        accept="image/*" 
                        required={true}
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
                        type={"text"} 
                        name="name" 
                        id="input_author" 
                        placeholder="Author" 
                        required={true}
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
                        type={"text"} 
                        name="location" 
                        id="input_location" 
                        placeholder="Location" 
                        required={true}
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
                        type={"text"} 
                        name="description" 
                        id="input_description" 
                        placeholder="Descirption" 
                        required={true}
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