import {get} from 'lodash' ;

export const searchValueSelector = (state) =>
    get(state,'mainSlice.searchValue')
export const curerntPageSelector = (state) =>
    get(state ,'mainSlice.currentPage')
export const jsonDataSelector = (state) =>
    get(state ,'mainSlice.jsonData')
export const searchFilterResultSelector = (state) =>
    get(state ,'mainSlice.search_filter_result')
