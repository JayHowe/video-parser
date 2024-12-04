import { useState } from 'react'
import './App.css'

function App() {

  const [link, setLink] = useState('')

  const submitParser = () => {
    console.log(link)
  }

  return (
    <>
      <div className='label'>
        请输入解析的地址：
      </div>
      <div className="card">
        <input className='link' onChange={(e) => setLink(e.target.value)} />
        <button type='submit' onClick={submitParser}>
          Submit
        </button>
      </div>
    </>
  )
}

export default App
