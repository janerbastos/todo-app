import axios from 'axios'

const URL = 'http://localhost:3000/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?_sort=createAt`)
    return {
        type: 'SEARCH',
        payload: request
    }
}