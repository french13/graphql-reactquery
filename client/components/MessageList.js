import React from 'react'
import MessageItem from './MessageItem'

const UserIds = ['roy', 'jay']

const getRandomUserId = () =>{
  return UserIds[Math.round(Math.random())] 
}

const messages = Array(50).fill(0).map((item, i)=>{
  return (
    {
      id : i+1,
      userId : getRandomUserId(),
      timestamp : 1234567890123+i*1000*60,
      text : `${i+1} mock text`
    }
  )
}).reverse()


// [
//   {
//     id : 1, 
//     userId : getRandomUserId,
//     timestamp : 1234567890123,
//     text : '1 mock text',
//   }
// ]

const MessageList = () => {
  return (
    <ul className='messages'>
      {
        messages.map((item, i) => {
          return (
            <MessageItem key={item.id} {...item}/>
          )
        })
      }
    </ul>
  )
}

export default MessageList