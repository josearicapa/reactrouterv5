import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <Link className="navbar-brand" to="/">CV</Link> 

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
         to="/personalInfo">
        Personal info
      </NavLink>
      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
         to="/summary">
        Career Summary
      </NavLink>
      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
         to="/qualifications">
       Qualifications
      </NavLink>      
      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
         to="/history">
       Carrer History
      </NavLink>
      <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
         to="/education">
       Education
      </NavLink>
    </ul>
  </div>
</nav>
  )
}
