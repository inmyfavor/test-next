import React, { useState } from 'react';
import './MessageBoard.css'

const messages = [
  { id: 1, author: 'Автор', text: 'Сообщение' },
]

const InputForm = () => {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className='inputForm'>
      <h7 className='formTitle'>Оставьте сообщение</h7>
      <input
        placeholder='Автор'
        className='authorInput'
        value={author}
        onChange={(e)=>setAuthor(e.target.value)}/>
      <textarea
        placeholder='Сообщение'
        className='textareaMessage'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}/>
      <input 
        type='submit' 
        value='Разместить сообщение'
        className='formSubmit'
        disabled={author.trim()==='' || message.trim()===''}/>
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
    <div className='board'>
      <InputForm/>
      {messages.map(message => <Message key={'message'+message.id} {...message}/>)}
    </div>
  );
};

export default MessageBoard;
