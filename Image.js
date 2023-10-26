import React from 'react';
import './Image.css';

const Image=()=>{
    let object=[
    {
        id:1, 
        img:'img/d.png',
        tutorial:'HTML AND CSS BASICS ',
        description:'description about article',
        author:'SACHIN',
    },
    
    {
        id:2, 
        img:'img/images.jpeg',
        tutorial:'JAVASCRIPT TIPS',
        description:'description about article',
        author:'SACHIN',
    },{
        id:3, 
        img:'img/e.jpg',
        tutorial:'INTRO TO REACT ROUTER ',
        description:'description about article',
        author:'SACHIN',
    }
];

const data = object.map((element)=>{
    return(
        <>
        <div className='Image_Box'>
        <div className='Image_img'>
            <div className='Image-img' key={element.id}>
                <img src={element.img} alt='imgs' />
            </div>
            <div className='Image-make'>
            <h1 className='random'>{element.tutorial}</h1>
            <p className='description'>{element.description}</p>
            <h1>{element.author}</h1>
            
            </div>
        </div>
        </div>
        

        </>
    );
}
)
return (
    <>
     {data} 
    </>
    );
}
export default Image;
