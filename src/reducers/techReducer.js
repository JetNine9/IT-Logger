import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOGS,
    DELETE_LOG,
    SET_CURRENT,
    UPDATE_LOG,
    CLEAR_CURRENT,
    SEARCH_LOGS,
    GET_TECHS
} from '../actions/types'



const initialStte = {
    techs: null,
    loading: false,
    error: null
}

const techReducer = (state = initialStte, action) => {
    switch (action.type) {

        case SET_LOADING :
            return {
                ...state,
                loading:true
            }
        case GET_TECHS :

            return {
                ...state,
                techs: action.payload,
                loading: false
            }


        default:
            return state;
    }
}

export default techReducer;
