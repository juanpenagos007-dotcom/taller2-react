import React from 'react'
import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Carrito de compras</span>

        <div>
          <NavLink 
            to="/" 
            className="nav-link d-inline text-white me-3"
          >
            Inicio
          </NavLink>

          <NavLink 
            to="/props" 
            className="nav-link d-inline text-white"
          >
            Props
          </NavLink>
        </div>
      </div>
    </nav>
  );
};