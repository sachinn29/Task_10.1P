import React from 'react';

import './CollectionImage.css'

const Collection = () => {
    let details = [
        {
            id: 1,
            img: 'img/a.png',
            random: 'NODE JS BASICS',
            description: 'description about tutorial.',
            author: 'SACHIN',
        },
        {
            id: 2,
            img: 'img/b.png',
            random: 'REACT INTRO',
            description: 'description about tutorial.',
            author: 'SACHIN',
        },
        {
            id: 3,
            img: 'img/c.png',
            random: 'EXPRESS TUTORIAL',
            description: 'description about tutorial.',
            author: 'SACHIN',
        }
    ];

    const items = details.map((elements) => (
        <>
        
        <div className='Element' key={elements.id}>

            <div className='Element_Card'>
        
                <div className='Card-img_1'>
                    <img src={elements.img} alt='imgs' />
                </div>

                <h1 className='Element_Data'>{elements.random}</h1>
                <p className='description'>{elements.description}</p>
                <h2>{elements.author}</h2>
        
            </div>
        </div>
        </>
    )
);

    return (
        
    <div>
        <div>{items}</div>
    </div>
    );
};

export default Collection;