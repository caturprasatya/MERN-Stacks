import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	    
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> Menu
	      </button>
				<form action="#" className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input type="text" className="form-control" placeholder="Search" />
            <button type="submit" placeholder="" className="form-control search"><span className="fa fa-search"></span></button>
          </div>
        </form>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav mr-auto">
	        	<li className="nav-item active"><a href="." className="nav-link">Home</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
  )
}
