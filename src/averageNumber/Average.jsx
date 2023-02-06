import React from 'react';
import './Average.css'
import { useSelector, useDispatch } from 'react-redux';
import { setNumber } from '../slices/averageNumberSlice';

function isValueCorrect(value) {
    if (value.trim()==='' || isNaN(Number(value))) {
        return true
    }
    return false
};

const Checkbox = (props) => {
    return (
        <label style={{fontSize: '12px'}}>
            <input type='checkbox' style={{marginRight: '10px'}}/>
            {props.label}
        </label>
    );
};

const numbers = [
    { id: 1, prevNum: 5, curNum: -4.55875},
];

const AverageNum = (props) => {
    return (
        <div className='message'>
            <div className='messageText '>Предыдущее значение: {props.prevNum}</div>
            <div className='messageText '>Введённое значение: {props.curNum}</div>
            <div className='messageText '>Среднее значение: {(props.prevNum+props.curNum)/2}</div>
        </div>
    );
};

const InputForm = () => {

    const dispatch = useDispatch();

    const number = useSelector((state) => state.averageNumber.number);

    return (
        <div className='inputForm'>
            <h7 className='title'>Средние числа</h7>
            <input
                placeholder='Введите число'
                className='input'
                value={number}
                onChange={(e)=>dispatch(setNumber(e.target.value))}/>
            <div className='row'>
                <Checkbox label='Число отрицательное'/>
                <Checkbox label='Число дробное'/>
            </div>
            <input 
                type='submit'
                value='Отправить и получить среднее'
                className='submit'
                disabled={isValueCorrect(number)}/>
        </div>
    );
};

const Average = () => {
    return (
        <div className='page'>
            <InputForm/>
            {numbers.map(num => <AverageNum key={'num:'+num.id} {...num}/>)}
        </div>
    );
};

export default Average;