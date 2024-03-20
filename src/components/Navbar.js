import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} href='/'>{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link text-${props.mode === 'light'?'dark':'light'}`} href='/about'>{props.about}</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch">
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here..',
    about: 'About'
}