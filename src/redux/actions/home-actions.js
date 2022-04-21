// Action Types
import  ApiManager from '../../service';
import {
    HOME_PAGE_LOADED,
    HOME_PAGE_SAVED
} from '../actionTypes';

/* Home Page's Actions */

export function savePreference(values) {
    return async (dispatch) => {
        try {
            const res = await ApiManager.saveUser({
                profile: {},
                preference: values
            })
            dispatch({
                type: HOME_PAGE_SAVED,
                payload: res.data
            })
        } catch (err) {
          console.log(err)
        }
    }
}

export function updatePreference(uid, values) {
    return async (dispatch) => {
        try {
            const res = await ApiManager.updateUser(uid, {
                profile: {},
                preference: values
            })
            dispatch({
                type: HOME_PAGE_SAVED,
                payload: res.data
            })
        } catch (err) {
          console.log(err)
        }
    }
}

export function loadPreference() {
    return async (dispatch) => {
        try {
          const res = await ApiManager.getUsersList({
            limit: 1, skip: 0
          })
            dispatch({
                type: HOME_PAGE_LOADED,
                payload: res.data.users[0]
            })
        } catch (err) {
          console.log(err)
        }
    }
}