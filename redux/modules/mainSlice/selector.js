import {get} from 'lodash' ;

export const searchValueSelector = (state) =>
    get(state,'mainSlice.searchValue')
export const curerntPageSelector = (state) =>
    get(state ,'mainSlice.currentPage')