import React, { useState } from 'react'

const UseStateTwo = () => {


  const [name, setName] = useState('your name');

  return (
    <div>
      <button onClick={() => setName('salman')}>Click on me: {name}</button>
    </div>
  )
}

export default UseStateTwo