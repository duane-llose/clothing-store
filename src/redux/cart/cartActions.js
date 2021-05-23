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

export const removeItemFromCart = item => {
    return {
        type: cartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const removeItemCollectionFromCart = cartItem => {
    return {
        type: cartActionTypes.REMOVE_ITEM_COLLECTION,
        payload: cartItem
    }
};