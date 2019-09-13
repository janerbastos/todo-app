import axios from 'axios'

const URL = 'http://localhost:3001/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}`)
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
}