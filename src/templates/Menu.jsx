import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link to="/" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> App
        </Link>
        <div id="navbarCollapse" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Tarefas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/abaut" className="nav-link">Sobre</Link>
                </li>
            </ul>
        </div>
    </nav>
)