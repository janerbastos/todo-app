import React from 'react'
import { connect } from 'react-redux'
import Grid from '../templates/Grid'
import IconButton from '../templates/IconButton'

const TodoForm = props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if(e.key === 'Escape'){
            props.handleClear()
        }
    }
    return (
        <div className='todoForm form-group' role='form'>
            <Grid cols='12 9 10'>
                <input type='text' id="description" className="form-control"
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={ props.description }>
                </input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}/>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch} />
                <IconButton style='default' icon='close'
                    onClick={props.handleClear} />
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({ description: state.todo.description })

export default connect(mapStateToProps)(TodoForm)