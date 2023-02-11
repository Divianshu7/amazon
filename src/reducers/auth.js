let userState = {}
if (localStorage.getItem('amazon-user')) {
    userState = JSON.parse(localStorage.getItem('amazon-user'))
}

export const authReducer = (state = userState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, ...action.payload }
        case 'LOGOUT':
            return action.payload;
        case 'ADD':
            console.log(state)
            if (!state.basket) return { ...state, basket: [action.payload] }
            else return { ...state, basket: [...state.basket, action.payload] }
        case 'REMOVE':
            const i = state.basket.findIndex((e) => e.id === action.payload.id)
            let newBasket = [...state.basket]
            if (i >= 0) {
                newBasket.splice(i, 1)
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
}