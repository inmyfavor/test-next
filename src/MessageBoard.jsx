import React, { useState } from 'react';
import './MessageBoard.css';
import { useSelector, useDispatch } from 'react-redux';

const messages = [
  { id: 1, author: 'Автор', text: 'Сообщение' },
]

const TextareaForm = () => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  return (
    <div className='inputForm'>
      <h7 className='title'>Оставьте сообщение</h7>
      <input
        placeholder='Автор'
        className='input'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}/>
      <textarea
        placeholder='Сообщение'
        className='textarea'
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
      <input 
        type='submit' 
        value='Разместить сообщение'
        className='submit'
        disabled={author.trim()==='' || text.trim()===''}/>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className='message'>
      <h7 className='messageAuthor'>{props.author}</h7>
      <p className='messageText'>{props.text}</p>
    </div>
  );
};

const MessageBoard = () => {
  return (
    <div className='page'>
      <TextareaForm/>
      {messages.map(message => <Message key={'message'+message.id} {...message}/>)}
    </div>
  );
};

export default MessageBoard;
