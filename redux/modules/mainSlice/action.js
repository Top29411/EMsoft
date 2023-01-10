import { createAction } from "redux-actions" ;
import * as CONSTANTS from './constants' ;

export const getJsonData = createAction(CONSTANTS.GET_JSON_DATA) ;
export const setSearchValue = createAction(CONSTANTS.SET_SEARCH_RESULT) ;
export const changeCurrentPage = createAction(CONSTANTS.CHANGE_CURRENT_PAGE) ;