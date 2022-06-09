import React from "react";

const Card =(props)=>{

    let cards = props.data.map(el => { return (
        <div key={el.id} className='col-lg-4'>
            <h2 className='card-title'></h2>
            <div className='card-card'>
                <div className="before">
                    <p className="card-label">Before</p>
                    <img className='img-fluid w-100 project-img' src={el.img1} alt={el.title} />
                </div>
                <div className="after">
                    <p className="card-label">After</p>
                    <img className='img-fluid w-100 project-img' src={el.img2} alt={el.title} />
                </div>
            </div>
        </div>
        )
    })

    return(
        <>
        {cards}
        </>
    )
}

export default Card