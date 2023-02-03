import React from 'react';
import { useNavigate } from 'react-router';
import './App.css';

const App = () => {
    const navigate = useNavigate();
    return (
        <div className='menu'>
            <button 
                className='menuButton'
                onClick={()=>navigate('/messageboard')}>
                    Доска сообщений
            </button>
            <button 
                className='menuButton'
                onClick={()=>navigate('/messageboard')}>
                    Средние числа
            </button>
            <a 
                className='menuLink'>
                    Репозиторий проекта
            </a>
        </div>
    );
};

export default App;