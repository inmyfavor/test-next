import React from 'react';
import './MessageBoard.css';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthor, setText } from '../slices/messageBoardSlice';

const messages = [
  { id: 1, author: 'Автор', text: 'Сообщение' },
];

const TextareaForm = () => {

  const dispatch = useDispatch();

  const author = useSelector((state) => state.messageBoard.author);
  const text = useSelector((state) => state.messageBoard.text);

  return (
    <div className='inputForm'>
      <h7 className='title'>Оставьте сообщение</h7>
      <input
        placeholder='Автор'
        className='input'
        value={author}
        onChange={(e)=>dispatch(setAuthor(e.target.value))}/>
      <textarea
        placeholder='Сообщение'
        className='textarea'
        value={text}
        onChange={(e)=>dispatch(setText(e.target.value))}/>
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
