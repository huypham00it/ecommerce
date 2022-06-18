//define all the application level states and actions
export const initialState = {
    basket: [],
}

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

// Selector
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_TO_BASKET':
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.item.id)
            }
        default:
            return state;
    }
}

export default reducer;