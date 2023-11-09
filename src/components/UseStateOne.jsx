import React, { useState } from 'react'

const UseStateOne = () => {

  const [count, setCount] = useState(0);

  function handleChange(event) {
    if (event.target.id === 'i') {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }

  }
  return (
    <div className='card'>
      <h2>useState count</h2>
      <div className='flex'>
        <div>
          <p style={{ marginLeft: '40px' }}>count: {count}</p>
        </div>
        <div>
          <button id='i' className='btn-primary' onClick={handleChange}>Increment + 1</button>
          <button id='d' className='btn-secondary' onClick={handleChange}>Decrement - 1</button>
        </div>
        <div>
          <a href="https://github.com/hakeemsalman/React-Hooks/blob/main/src/components/UseStateOne.jsx" target='blank'> Github link</a>
        </div>
      </div>
    </div>
  )
}

export default UseStateOne