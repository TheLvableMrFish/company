import React from 'react'

import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"

const Footer =()=>{
    return(
        <>
        <footer className='footer' id='contact'>
            <div className='contact-body'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 d-flex justify-content-center footer-text-white'>Contact Me:</div>
                    <div className='col-md-12 d-flex justify-content-center footer-text-sec'>Shawn Pagano</div>
                    <div className='col-md-12 d-flex justify-content-center footer-text-white'>OWNER</div>
                    <a className='col-md-12 d-flex justify-content-center footer-text-sec' href='tel:+5047013572'>504-701-3572</a>
                    <div className='col-md-12 d-flex justify-content-center footer-text-white'>Free Estimates</div>
                </div>
            </div>
        
            <div className='colophon-body'>
                <p className="colophon-text  container">Fishy Projects Site by Christian Pagano &copy;2022</p>
            </div>
        </footer>
        </>
    )
}

export default Footer