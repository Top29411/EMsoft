import { handleActions } from "redux-actions" ;
import { requestSuccess } from "../../apis/request" ;
import * as CONSTANTS from './constants' ;

const getInitialState = () =>{
    return {
        jsonData : {} ,
        search_filter_result : {} ,
        searchValue : '' ,
        currentPage : 1 ,
    }
}

export default handleActions({
    [CONSTANTS.SET_JSON_DATA] : (state , action) => ({
        ...state ,
        jsonData : action.payload
    })
    ,
    [CONSTANTS.SET_RESULT] : (state , action) => ({
        ...state ,
        search_filter_result : action.payload
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