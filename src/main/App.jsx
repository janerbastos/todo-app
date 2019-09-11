import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import React from 'react'
import Todo from '../todo/Todo'
import Abaut from '../about/Abaut'
import Menu from '../templates/Manu'

export default props => (
    <div className="container">
        <Menu />
        <Todo />
        <Abaut />
    </div>
)