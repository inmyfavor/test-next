import React, { useState } from 'react';
import './Average.css'

function isValueCorrect(value) {
    if (value.trim()==='' || isNaN(Number(value))) {
        return true;
    }
    return false;
}

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

const Average = () => {
    const [number, setNumber] = useState('');
    return (
        <div className='page'>
            <div className='inputForm'>
                <h7 className='title'>Средние числа</h7>
                <input
                    placeholder='Введите число'
                    className='input'
                    value={number}
                    onChange={(e)=>setNumber(e.target.value)}/>
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
            {numbers.map(num => <AverageNum key={'num:'+num.id} {...num}/>)}
        </div>
    );
};

export default Average;