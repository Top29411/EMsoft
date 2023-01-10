import { all, takeLatest } from "redux-saga/effects";
import apiCall from "./apis/apiCall" ;
import * as CONSTANTS from './modules/mainSlice/constants' ;

const doGetJsonData = apiCall({
    type: CONSTANTS.GET_JSON_DATA ,
    method : get , 
    path : './data.json'
})

export default function* rootSaga() {
    yield takeLatest(CONSTANTS.GET_JSON_DATA , doGetJsonData) ;

}
