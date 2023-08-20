import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    const set = (val) => {

        props.toggleMode(val);
        
      };
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0 d-flex navbar-right">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                    </form> */}
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'dark' : 'light'} Mode</label>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Enable Theme
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                        {props.modes.map((mode)=>(
                            <li key={mode}><Link to='' onClick={() => set(mode)} className="dropdown-item">{mode}</Link></li>
                        ))}
                        
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = { title: PropTypes.string }

