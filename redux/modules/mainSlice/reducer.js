import { handleActions } from "redux-actions" ;
import { requestSuccess } from "../../apis/request" ;
import * as CONSTANTS from './constants' ;

const getInitialState = () =>{
    return {
        searchValue : '' ,
        currentPage : 1 ,
        jsonData : {}
    }
}

export default handleActions({
    [requestSuccess(CONSTANTS.GET_JSON_DATA)] : (state , {payload}) => ({
        ...state ,
        jsonData : payload
    })
    ,
    [CONSTANTS.SET_SEARCH_RESULT] : (state , action) => ({
        ...state ,
        searchValue : action.payload
    }) ,
    [CONSTANTS.CHANGE_CURRENT_PAGE] : (state , action) => ({
        ...state ,
        currentPage : action.payload
    })
} , getInitialState())