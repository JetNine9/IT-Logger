import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'
import axios from 'axios'


// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();
//         const res = await axios.get("/logs")

//         dispatch({
//             type: GET_LOGS,
//             payload: res.data
//         })
//     }
// }

// get logs
export const getLogs = () => async dispatch => {
    try {

        setLoading();
        const res = await axios.get("/logs")

        dispatch({
            type: GET_LOGS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }


}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
