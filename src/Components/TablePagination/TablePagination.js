import React from 'react'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';

import './TablePagination.css'

export default function TablePagination() {
    const dispatch = useDispatch();
    
    const paginationData = useSelector(state => state.tableData.paginationData);
    
    const openPaginationPage = (target) => {
        dispatch({type: 'SET_PAGE', payload: target.innerHTML});    
    }

    const changePage = (action) => {
        (
            (paginationData.page + action > 0) 
            && 
            (paginationData.page + action <= paginationData.data.length / 2)
        ) && dispatch({type: 'SET_PAGINATION', payload: paginationData.page + action});
    }

    return (
        <div className='paggination'>
            <Button onClick={() => changePage(-1)} className='previousButton'>{'<'}</Button>
            {paginationData.data.filter((_, index) => (
                (index >= 3 * (paginationData.page - 1) && index < 3 * paginationData.page) 
            )).map(item => (
                <Button key={'pagination' + item} onClick={e => openPaginationPage(e.target)}>{item}</Button>
            ))}
            <Button onClick={() => changePage(1)} className='nextButton'>{'>'}</Button>
        </div>
    )
}
