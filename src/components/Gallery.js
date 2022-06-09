import React from 'react'

import Card from './Card'

import gallery from '../data/gallery'

const Gallery =()=>{
    return(
        <>
        <main className='container gallery-container' id='gallery'>
            <h2 className='gallery-header'>Gallery:</h2>
            <div className='row'>
                <Card data={gallery} />
            </div>
        </main>
        </>
    )
}

export default Gallery