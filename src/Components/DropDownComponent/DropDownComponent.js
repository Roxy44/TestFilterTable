import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Menu, Input, Select } from 'antd';
import 'antd/dist/antd.css';

import './DropDownComponent.css'

export default function DropDownComponent() {
    const dispatch = useDispatch();

    const data = useSelector(state => state.tableData.tableData);

    const [isContainsDisable, setContainsDisable] = useState(false);
    const [isMoreDisable, setMoreDisable] = useState(false);
    const [isLessDisable, setLessDisable] = useState(false);

    const [parameter, setParameter] = useState('');
    const [condition, setCondition] = useState('');
    const [filter, setFilter] = useState('')
    
    const header = [
        {
            key: 'parameter1',
            value: 'name',
            label: 'Название',
        },
        {
            key: 'parameter2',
            value: 'amount',
            label: 'Количество',
        },
        {
            key: 'parameter3',
            value: 'distance',
            label: 'Расстояние',
        },
    ];

    const conditions = [
        {
            key: 'condition1',
            value: 'equal',
            label: 'РАВНО',
        },
        {
            key: 'condition2',
            value: 'contains',
            disabled: isContainsDisable,
            label: 'СОДЕРЖИТ',
        },
        {
            key: 'condition3',
            value: 'more',
            disabled: isMoreDisable,
            label: 'БОЛЬШЕ',
        },
        {
            key: 'condition4',
            value: 'less',
            disabled: isLessDisable,
            label: 'МЕНЬШЕ',
        },
    ];

    const setParameterFunc = (value) => {
        setContainsDisable(value === 'amount' ? true : false);
        setMoreDisable(value === 'name' ? true : false);
        setLessDisable(value === 'name' ? true : false);

        setParameter(value);
    }

    const setConditionFunc = (value) => {
        setCondition(value);
    }

    const filterData = () => {
        let filterParametr = null;
        let filteredData = [];

        switch (parameter) {
            case 'name':
                filterParametr = 1;
                break;
            case 'amount':
                filterParametr = 2;
                break;
            case 'distance':
                filterParametr = 3;
                break;
            default:
                console.log('no data!');
                break;
        }

        switch (condition) {
            case 'equal':
                filteredData = data.filter((item) => (
                    item.data[filterParametr] == filter && item.data[filterParametr]
                ));
                break;
            case 'contains':
                filteredData = data.filter((item) => (
                    item.data[filterParametr].includes(filter) && item.data[filterParametr]
                ));
                break;
            case 'more':
                filteredData = data.filter((item) => (
                    item.data[filterParametr] > filter && item.data[filterParametr]
                ));
                break;
            case 'less':
                filteredData = data.filter((item) => (
                    item.data[filterParametr] < filter && item.data[filterParametr]
                ));
                break;
            default:
                console.log('no condition!');
                break;
        }
        if (filteredData.length !== 0) {
            dispatch({type: 'SET_TABLEDATA', payload: filteredData});
            setFilter('');
        }
    }

    return (
        <div className='dropDownMenu'>
            <Select className='menuItem' placeholder='Выберите колонку' options={header} onChange={(value) => setParameterFunc(value)} />

            <Select className='menuItem' placeholder='Выберите условие' options={conditions} onChange={(value) => setConditionFunc(value)} />
    
            <Input className='menuItem' onChange={(e) => setFilter(e.target.value)} value={filter}/>
    
            <Button className='menuItem' type='primary' danger style={{flex:''}} onClick={() => dispatch({type: 'RESET_TABLEDATA'})} >Очистить</Button>
        
            <Button className='menuItem' type='primary' style={{flex:''}} onClick={() => filterData()} >Фильтрация</Button>   
        </div> 
    )
}
