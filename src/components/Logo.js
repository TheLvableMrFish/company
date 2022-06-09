import React from 'react'

import { FaPaintRoller } from 'react-icons/fa'


const Logo =()=>{
    return(
        <>
        <div className='container typeContainer'>
            <div className='typeBody'>
                
                    <h1 className='typeHeader'>Pagano</h1>
                    <div className='paint-roller'>
                        <FaPaintRoller className='roller' />
                    </div>
                    <p className='subtitle'>PAINTING LLC</p>
                
            </div>
        </div>
        </>
    )
}

export default Logo