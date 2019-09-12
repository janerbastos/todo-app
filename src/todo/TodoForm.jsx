import React from 'react'
import Grid from '../templates/Grid'
import IconButton from '../templates/IconButton'

export default props => (
    <div className='todoForm form-group' role='form'>
        <Grid cols='12 9 10'>
            <input type='text' id="description" className="form-control"
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                value={ props.description }>
            </input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}/>
        </Grid>
    </div>
)