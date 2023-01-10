import { all, takeLatest } from "redux-saga/effects";
import apiCall from "./apis/apiCall" ;
import * as CONSTANTS from './modules/mainSlice/constants' ;



export default function* rootSaga() {
    // yield takeLatest(CONSTANTS.GET_JSON_DATA , doGetJsonData) ;
}
