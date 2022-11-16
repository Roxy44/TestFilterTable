const generatedData = {
    generatedTableData: [
        {key: 0, data: ['01.02.22', 'hello', 5, '5km']},
        {key: 1, data: ['02.02.22', 'this', 4, '8km']},
        {key: 2, data: ['03.03.22', 'is', 2, '6km']},
        {key: 3, data: ['04.03.22', 'test', 4, '16km']},
        {key: 4, data: ['05.02.22', 'data', 4, '20km']},
        {key: 5, data: ['06.02.22', 'and', 5, '30km']},
        {key: 6, data: ['07.02.22', 'now', 4, '28km']},
        {key: 7, data: ['05.03.22', 'this', 2, '10km']},
        {key: 8, data: ['03.03.22', 'is', 4, '12km']},
        {key: 9, data: ['02.02.22', 'second', 4, '8km']},
        {key: 10, data: ['05.02.22', 'data', 5, '25km']},
        {key: 11, data: ['02.02.22', 'page', 4, '8km']},
        {key: 12, data: ['03.03.22', 'and', 2, '6km']},
        {key: 13, data: ['04.03.22', 'third', 4, '16km']},
        {key: 14, data: ['07.02.22', 'page', 4, '28km']},
    ],
}

const defaultState = {
	tableData: generatedData.generatedTableData,
    paginationData: {
        page: 1,
        data: [1, 2, 3, 4, 5],
    },
    currentPage: 1,
}

export const tableDataReducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'SET_TABLEDATA':
			return { ...state, tableData: action.payload };
        case 'RESET_TABLEDATA':
            return { ...state, tableData: generatedData.generatedTableData };
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload };
        case 'SET_PAGINATION':
            return { ...state, paginationData: {...state.paginationData, page: action.payload}};   
		default:
			return state;
	}
}