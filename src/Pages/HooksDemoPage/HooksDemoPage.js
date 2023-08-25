import React from 'react'
import { Helmet } from 'react-helmet'
import MyAccount from './MyAccount/MyAccount'

const HooksDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          Hooks Demo
        </title>
      </Helmet>
      <h1>REACT HOOKS DEMO</h1>
      <hr/>
      <h3>1.Use State Demo</h3>
      <MyAccount/>
      <hr/>
    </div>
  )
}

export default HooksDemoPage
