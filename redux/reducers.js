import { combineReducers } from 'redux' ;
import mainSlice from './modules/mainSlice/reducer' 
const rootReducer = combineReducers({
    mainSlice
}) ;

// export type RootState = ReturnType<typeof rootReducer> ;

export default rootReducer ;
