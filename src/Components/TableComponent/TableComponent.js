import React from 'react'

import { useSelector } from 'react-redux';

import TablePagination from '../TablePagination/TablePagination';
import DropDownComponent from '../DropDownComponent/DropDownComponent';

import './TableComponent.css'


export default function TableComponent() {
    const data = useSelector(state => state.tableData.tableData);
    const pageSize = 3;

    const currentPage = useSelector(state => state.tableData.currentPage);

    const pageData = data.filter((item, index) => (
        (index >= pageSize * (currentPage - 1) && index < pageSize * currentPage) && item  
    ));

    return (
        <div className='content'>
            <DropDownComponent />
            <table className='table'>
                <thead className='head'>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </thead>
                <tbody className='body'>
                    {pageData.map((item, columnIndex) => (
                        <tr key={'column' + columnIndex}>
                            {item.data.map((row, rowIndex) => (
                                <td key={'row' + rowIndex}>{row}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <TablePagination />
        </div>
    )
}
