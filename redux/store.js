import  createSagaMiddleware  from 'redux-saga';
import { createStore , applyMiddleware } from 'redux' ;
// import { routerMiddleware } from 'react-router-redux' ;
import rootReducer from './reducers' ;
import sagas from './saga' ;
// import { createBrowserHistory as createHistory } from 'history'

// export const history = createHistory() ;


const sagaMiddleware = createSagaMiddleware() ;

const middleware = [
    sagaMiddleware,
    // routerMiddleware(history)
  ]

const store = createStore(rootReducer , applyMiddleware(...middleware )) ;

sagaMiddleware.run(sagas) ;

export default store ;