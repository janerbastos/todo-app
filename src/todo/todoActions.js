import axios from 'axios'

const URL = 'http://localhost:3001/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?_sort=createAt&order=DESC`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
            .then(resp => dispatch(search()))
    }
}