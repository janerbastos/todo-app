import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../templates/IconButton'
import { markAsDone, markAsPending } from './todoActions'

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? 'markAsDone': ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.markAsDone(todo)} hide={todo.done} />
                    <IconButton style='warning' icon='undo'
                        onClick={() => props.markAsPending(todo)} hide={!todo.done} />
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(todo)} hide={!todo.done}/>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)