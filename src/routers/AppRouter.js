import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import NewPost from "../components/newPost/NewPost";
import PostView from "../components/PostViewPage/PostView";




export default function AppRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/new" element={<NewPost />} />
            <Route path="/all" element={<PostView />} />
        </Routes>

    </BrowserRouter>
}