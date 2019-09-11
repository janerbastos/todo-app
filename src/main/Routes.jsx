import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Todo from '../todo/Todo'
import Abaut from '../about/Abaut'

export default props => (
    <Switch>
        <Route exact path='/' component={Todo}/>
        <Route path='/abaut' component={Abaut}/>
        <Redirect from='*' to='/' />
    </Switch>
)