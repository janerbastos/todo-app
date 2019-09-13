import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    todo: () => ({
        description: "Ler livro",
        list: [
            {
                id: 1,
                description: 'Teste',
                done: true
            },
            {
                id: 2,
                description: 'Teste 2',
                done: false
            },
            {
                id: 3,
                description: 'Teste 3',
                done: true
            },
        ]
    })
})

export default rootReducers