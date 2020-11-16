import axios from 'axios'
import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOGS,
    DELETE_LOG,
    SET_CURRENT,
    UPDATE_LOG,
    CLEAR_CURRENT,
    SEARCH_LOGS
} from './types'



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
            payload: error.response.statusText
        })
    }

}

// add logs
export const addLog = (log) => async dispatch => {
    try {

        setLoading();
        const res = await axios.post("/logs", log)


        dispatch({
            type: ADD_LOGS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }


}

//delete logs from server
export const deleteLog = (id) => async dispatch => {
    try {

        setLoading()

        await axios.delete("/logs/" + id)

        dispatch({
            type: DELETE_LOG,
            payload: id
        })

    } catch (error) {

        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }


}


//UPDATE logs from server
export const updateLog = (log) => async dispatch => {
    try {
        setLoading()

        const res = await axios.put("/logs/" + log.id, log)

        dispatch({
            type: UPDATE_LOG,
            payload: res.data

        })

    } catch (error) {

        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }


}

// Search Logs
export const searchLogs = text => async dispatch => {
    try {

        setLoading();
        const res = await axios.get("/logs?q=" + text)


        dispatch({
            type: SEARCH_LOGS,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }

}

// set current
export const setCurrent = (log) => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

// clear current
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT

    }
}



// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}
