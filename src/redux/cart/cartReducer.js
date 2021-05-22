import cartActionTypes from './cartActionTypes';
import { addItemToCart } from './cartUtilities';


const initialState = {
    isCartDropdownOpen: false,
    cartItems: []
};

export const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_DROPDOWN_STATUS:
            return {
                ...state,
                isCartDropdownOpen: action.payload
                // hidden: !state.hidden
            }

        case cartActionTypes.ADD_ITEM:
            console.log(state);
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
};