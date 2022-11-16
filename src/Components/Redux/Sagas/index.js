import { fork, all } from 'redux-saga/effects'
import { tableSaga } from './TableSaga';

export default function* rootSaga() {
    yield all([
			fork(tableSaga),
    ])
}