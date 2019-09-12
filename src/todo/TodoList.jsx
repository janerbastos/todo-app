import React from 'react'
import IconButton from '../templates/IconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo.id}>
                <td>{todo.description}</td>
                <td><IconButton style='danger' icon='trash-o'
                    onClick={() => props.handleRemove(todo)}/></td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}