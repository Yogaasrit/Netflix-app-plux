import React from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog/Blog'
import MyAccount from './MyAccount/MyAccount'
import TodosVarient1 from './TodosVarient1/TodosVarient1'
import TodosVarient2 from './TodosVarient2/TodosVarient2'

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
      <hr/>
      <h3>3.Use Ref and use Reducer Demo</h3>
      <h4>TodosVariant1</h4>
      <TodosVarient1/>
      <h4>TodosVariant2</h4>
      <TodosVarient2/>
    </div>
  )
}

export default HooksDemoPage
