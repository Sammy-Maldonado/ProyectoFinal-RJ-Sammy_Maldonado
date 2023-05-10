import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <nav className="navbarsm navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid mx-4">
          <Link to={'/'}><img className='ms-5 navbar-logo img-fluid' src="././img/great-16-9.png" alt="logo de great templates" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="ul-navbar navbar-nav d-flex justify-content-between">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Plantillas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="text-deco" to={`/categoria/2`}>
                      <p className="dropdown-item">Portafolio</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="text-deco" to={`/categoria/3`}>
                      <p className="dropdown-item">Negocios</p>
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </header>
  )
}

export default NavBar