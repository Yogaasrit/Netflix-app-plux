import React, { useState } from 'react'

const MyAccount = () => {
  // Hooks should be in top level
  // Returns a stateful value, and a function to update it.
  // const myArray = useState('Yogaa');
  // This array always have two index only- 1. State Value 2. Function.
  // console.log(myArray);
  // console.log(myArray[o]); - Yogaa
  // Being only two index we destructure - const [name, setName] = useState('Yoga);

  const [name, setName] = useState('Yoga');
  // name - state value
  // setName- function
  // Initially name is 'Yoga' when setName is called it updates the state as 'Sri'.

  const eventHandleChangeUserName = () => {
    setName('Sri');
  }
  return (
    <div>
      <h5>MyAccount</h5>
      <p>Account User Name : {name}</p>
      <button type = 'button' onClick = {eventHandleChangeUserName}>Change User Name</button>
    </div>
  )
}

export default MyAccount
