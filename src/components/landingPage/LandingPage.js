import React from 'react';
import home from '../../images/home.png';
import { Link } from 'react-router-dom';

import '../styles/styles.css'

export default function LandingPage(){
    return (
        <div className='home-container'>
            <div className='home-content'>
                <img src={home} alt='landing-img-10x'/>
                <div className='content-div'>
                    <h1>10x Team 04</h1>
                    <Link to={'new'}><button className='btn-style'>Enter</button></Link>
                </div>
            </div>
        </div>
    )
}