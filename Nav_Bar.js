import React from 'react';
import  './Nav_Bar.css';

import Image from './Image.js';
import Text_Part from './Text_Part.js';
import TextPart1 from './TextPart1.js';
import TextPart2 from './TextPart2.js';
import Navbar from './Navbar.js';
import Last from './Last.js';
import CollectionImage from './CollectionImage.js';
function Nav_Bar(){
    return (
        <>
        <div className='Nav_Box'>
            <h2>DEV@Deakin</h2>
            <input className='input' type='search' placeholder='Search' />
            <p className='paragraph_1'>Post</p>
            <p className='paragraph_1'>Login</p>
        </div>
        <div className='image'>
            <img src='img/main.jpg' alt='main' />
        </div>
        <h1 className='Text'>Featured Articles</h1>  
        <div>
        <Image/>
        <Text_Part/>
        <TextPart1/>
        <CollectionImage/>
        <TextPart2/>
        <Navbar/>
        <Last/>
        </div>
    </>
    )
}
export default Nav_Bar;