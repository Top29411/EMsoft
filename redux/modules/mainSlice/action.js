import { createAction } from "redux-actions" ;
import * as CONSTANTS from './constants' ;

export const setJsonData = createAction(CONSTANTS.SET_JSON_DATA) ;
export const setResult = createAction(CONSTANTS.SET_RESULT)
export const setSearchValue = createAction(CONSTANTS.SET_SEARCH_RESULT) ;
export const changeCurrentPage = createAction(CONSTANTS.CHANGE_CURRENT_PAGE) ;