import { userActionTypes } from './userActionTypes';

const initiate_state = {
    currentUser: null
};

export const userReducer = (state = initiate_state, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload
            }
        }
        default:
            return state
    }
};
