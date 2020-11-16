import axios from 'axios'
import {
    GET_TECHS,
    ADD_TECH,
    DELETE_TECH,
    SET_LOADING,
    TECHS_ERROR,
    LOGS_ERROR,
} from './types'

//GET TECHS FROM SERVER
export const getTech = () => async dispatch => {
    try {

        setLoading();
        const res = await axios.get("/techs")

        dispatch({
            type: GET_TECHS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

// SET LOADING TO TRUE
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
