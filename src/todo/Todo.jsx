import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../templates/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const URL = 'http://localhost:3001/todos'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh()
    }

    refresh(){
        axios.get(`${URL}?sort=-createAt`)
            .then(resp => this.setState({...this.state, description: '', list: resp.data}))
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description, done: 'False' })
            .then(resp => this.refresh())
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList list={this.state.list}/>
            </div>
        )
    }
}