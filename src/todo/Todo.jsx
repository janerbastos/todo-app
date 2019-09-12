import React, {Component} from 'react'
import PageHeader from '../templates/PageHeader'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

export default class Todo extends Component{

    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e){
        this.setState({ ...this.state, description: e.target.value})
    }

    handleAdd(){
        
    }

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro' />
                <TodoForm description={this.state.description}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList/>
            </div>
        )
    }
}