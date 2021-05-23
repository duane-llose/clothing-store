import cartActionTypes from './cartActionTypes';
import { addItemToCart, removeItemFromCart, removeItemCollectionFromCart } from './cartUtilities';

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
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                // cartItems: [...state.cartItems, action.payload]
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM_COLLECTION:
            // const newCartItems = [];
            // const cartItems = [...state.cartItems];
            // const newCartItems = [];
            // Object.values(cartItems).forEach(cart => {
            //     if (cart['id'] !== action.payload.id) {
            //         newCartItems.push(cart);
            //     }
            // })
            return {
                ...state,
                cartItems: removeItemCollectionFromCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
};