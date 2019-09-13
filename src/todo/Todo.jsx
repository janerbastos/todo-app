import React, {Component} from 'react'

import PageHeader from '../templates/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm  />
        <TodoList  />
    </div>
)
