import { takeLatest, all } from 'redux-saga/effects'

// func for backend requests
function* getTableData() {
	
}

export function* tableSaga() {
	yield all ([
		takeLatest('GET_TABLEDATA', getTableData),
	]);
}