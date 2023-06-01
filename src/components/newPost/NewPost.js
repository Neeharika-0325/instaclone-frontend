import React from "react";
import Navbar from "../Navbar";
import '../styles/styles.css'

export default function NewPost(){

    return (
        <>
            <Navbar/>
            <form  id="container">
                <input type={"file"} name="PostImage" id="input_file" accept=".jpg, .jpeg, .png, .pdf" required={true}></input>
                <input type={"text"} name="name" id="input_author" placeholder="Author" required={true}></input>
                <input type={"text"} name="location" id="input_location" placeholder="Location" required={true}></input>
                <input type={"text"} name="description" id="input_description" placeholder="Descirption" required={true}></input>
                <button id="button">Post</button>
            </form>
        </>
        
    )
}