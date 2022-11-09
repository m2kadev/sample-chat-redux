import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addMessage } from './features/message'

function App() {
  const messages = useSelector(state => state.messages.value)
  const [text, setText] = useState('')
  const [replyText, setReplyText] = useState('')
  const [currentDate, setCurrentDate] = useState(new Date()) 
  const dispatch = useDispatch()

  const sendMessage = () => {
    if (!text) return
    else {
      setCurrentDate(new Date())
      dispatch(addMessage({userId: 1, content: text, currentDate: currentDate.toLocaleString()}))
      setText('')
    }
  }

  const sendReply = () => {
    if (!replyText) return
    else {
      setCurrentDate(new Date())
      dispatch(addMessage({userId: 2, content: replyText, currentDate: currentDate.toLocaleString()}))
      setReplyText('')
    }
  }

  console.log(messages)

  return (
    <div className="App">
      <div className='left'>
        
        <div className='message-box'>
          {
            messages?.map(message => {
              return (
                <div className={message.userId === 1 ? 'left-msg-tag': 'right-msg-tag'} key={message.currentDate}>
                  <p className='msg-content'>{message.content}</p>
                </div>
              )
            })
          }
        </div>

        <div className='input-control'>
          <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder="Write Message" />
          <button 
            onClick={sendMessage}
          >Send</button>

        </div>

      </div>

      <div className="right">

        <div className='message-box'>
          {
            messages?.map(message => {
              return (
                <div className={message.userId === 2 ? 'left-msg-tag': 'right-msg-tag'} key={message.currentDate}>
                  <p className='msg-content'>{message.content}</p>
                </div>
              )
            })
          }
        </div>

        <div className='input-control'>
          <input type="text" value={replyText} onChange={e => setReplyText(e.target.value)} placeholder='Write Message' />
          <button
            onClick={sendReply}
          >Send</button>
        </div>
        
      </div>

    </div>
  )
}

export default App
