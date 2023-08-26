import React from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog/Blog'
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
      <h3>2.Use Effect Demo</h3>
      <Blog/>
    </div>
  )
}

export default HooksDemoPage
