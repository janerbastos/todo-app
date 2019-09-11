import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Menu from '../templates/Menu'
import Routes from './Routes';

export default props => (
    <BrowserRouter>
    <div className="container">
        <Menu/>
        <Routes />
    </div>
    </BrowserRouter>
)