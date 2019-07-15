import React, { useState, useEffect } from 'react'
import * as ChatAPI from '../ChatApi'

const HooksComponent: React.SFC = (): JSX.Element => {
  
  const [todo, setTodo] = useState({ text: 'Learn Hooks', date: '2019-07-14' });


  const _count: number = 11
  const [count, setCount] = useState(_count)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(false);
  
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus();
    };
  });

  function handleStatusChange(status: {isOnline: boolean}): void {
    setIsOnline(status.isOnline);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>text: {todo.text}</p>
      <p>date: {todo.date}</p>
      <button onClick={() => setTodo(Object.assign({}, todo, {text: 'Learned Hooks'}))}>
        Click me
      </button>
      <p>online status: {String(isOnline)}</p>
    </div>
  )
}

export default HooksComponent