import cartActionTypes from './cartActionTypes';

export const setCartDrowndown = status => ({
    type: cartActionTypes.SET_CART_DROPDOWN_STATUS,
    payload: status
});

export const addItemToCart = item => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item
    }
};