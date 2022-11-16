import { combineReducers} from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { tableDataReducer } from './Reducers/TableDataReducer';

import rootSaga from './Sagas/index';

const rootReducer = combineReducers({
    tableData: tableDataReducer,
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga)