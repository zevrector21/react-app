// Action Type Imports
import {
    ASYNC_START,
    HOME_PAGE_SAVED,
    HOME_PAGE_LOADED
} from "../actionTypes";

const initialState = {
    loading: true,
    user: null
};
// Home Page's Reducer
export default function homeReducer(state=initialState, action) {
    switch (action.type) {
        case ASYNC_START:
            return
        case HOME_PAGE_LOADED:
            return {
                ...state,
                loading: false,
                user:action.payload || {}
            };
        case HOME_PAGE_SAVED:
            return {
                ...state,
                loading: false,
                user:action.payload || {}
            };
        default:
            return {...state};
    }
};



