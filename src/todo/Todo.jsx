import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../templates/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

//const URL = 'http://localhost:3001/todos'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        
    }

    refresh(description=''){
        const search = description ? `&q=${description}` : ''
        axios.get(`${URL}?_sort=createAt&_order=DESC${search}`)
            .then(resp => this.setState({...this.state, description, list: resp.data}))
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description, done: false })
            .then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo.id}`)
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo.id}`, {...todo, done:true})
            .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo.id}`, {...todo, done:false})
            .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh()
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm  />
                <TodoList  />
            </div>
        )
    }
}