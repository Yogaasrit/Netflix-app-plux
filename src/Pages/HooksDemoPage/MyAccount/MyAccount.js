import React, { useState } from 'react'

const MyAccount = () => {
  // Hooks should be in top level
  // Returns a stateful value, and a function to update it.
  // const myArray = useState('Yogaa');
  // This array always have two index only- 1. State Value 2. Function.
  // console.log(myArray);
  // console.log(myArray[o]); - Yogaa
  // Being only two index we destructure - const [name, setName] = useState('Yoga);

  const [accountName, setAccountName] = useState('Yoga');
  const [accountNumber, setAccountNumber] = useState(93608);
  const [logStatus, setLogStatus] = useState(false);
  // name - state value
  // setName- function
  // Initially name is 'Yoga' when setName is called it updates the state as 'Sri'.

  const HandleChangeUserName = () => {
    setAccountName('Sri');
  }
  return (
    <div>
      <h5>MyAccount</h5>
      <p>Account User Name : {accountName}</p>
      <button type = 'button' onClick = {HandleChangeUserName}>Change User Name</button>
      <p>Account {accountName} Number : {accountNumber}</p>
      <button type='button'
        onClick = {() => {
          setAccountNumber(94881);
        }}>
        Change User Number
      </button>
      <hr/>
      <button onClick = {() => {
        setLogStatus(!logStatus);
      }}>
        {logStatus ? 'Login' : 'Logout'}</button>
    </div>
  )
}

export default MyAccount

// RE-RENDERING
// 1.
// currentState = 'Yoga'
// newState = 'Sri'
// 2.
// button clicked re- renders ->
// currentState = 'sri'
// newState = 'Sri'
// 3.
// button Clicked no re renders -> beacuse there is no change from the previous one.
// currentState = 'sri'
// newState = 'Sri'
