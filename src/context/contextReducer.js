// What is a 'Reducer'?
// Reducer:             a function that takes in the old state and an action => new state
// Mathematicaly:       f(S, a) => S'

const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload)
            localStorage.setItem('transactions', JSON.stringify(transactions))
            break;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            localStorage.setItem('transactions', JSON.stringify(transactions))
            break;
        default:
            break;
    }
    return transactions;
}

export default contextReducer;