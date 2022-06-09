import React from 'react'

const Header =()=>{
    return(
        <>
        <header className='header' id='header'>
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand nav-link-header" href="/company">
                        <img className='img-fluid logo' src='/media/webLogo.png' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav navbar-links mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nav-link-text" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-text" href="#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-link-text" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header