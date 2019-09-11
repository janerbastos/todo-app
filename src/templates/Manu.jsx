import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a href="#/" className="navbar-brand">
            <i className="fa fa-calendar-check-o"></i> App
        </a>
        <div id="navbarCollapse" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><a href="#/todos" className="nav-link">Tarefas</a></li>
                <li className="nav-item"><a href="#/about" className="nav-link">Sobre</a></li>
            </ul>
        </div>
    </nav>
)