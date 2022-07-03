import Proptypes from 'prop-types'

import React from 'react';
import {Link} from "react-router-dom"

// Props - refers to properties. It will be passed from the place where this component will be called. And here that props will be used as Javascript code
export default function Navbar(props){
    const iStyle={
        color: 'rgb(232, 41, 31)',
        fontWeight: 'bold',
        fontFamily: 'Georgia, serif',
        marginRight: '2px'
    }

    return (
        <>
        {/* <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style = {{backgroundColor: "red"}}> */}
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
            <Link to="/" className="navbar-brand mx-5"><span className="i" style={iStyle}>i</span>{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" style ={{cursor:'pointer'}} defaultChecked = {true} aria-checked="false" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault"><span style={{color:"white"}}> Dark Mode</span></label>
                </div>
            </div>
        </nav>
        </>
    )
}

// propTypes is for applying check on whtever props values will be sent, what will be the type of that props
// Navbar.propTypes ={
//     title: Proptypes.string // If 'title' props is not sent a string value then a warning will be shown 
// }

Navbar.propTypes ={
    title: Proptypes.string.isRequired // It will show up an error in the console if the prop was not passed 
}

// We can set Defaultprops : i.e. when no props is passed then It will show the defaultProp
Navbar.defaultProps ={
    title : "Default title"
}