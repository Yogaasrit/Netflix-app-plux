import React from 'react'
import { Helmet } from 'react-helmet'
import Blog from './Blog/Blog'
import MyAccount from './MyAccount/MyAccount'
import PaymentForm from './PaymentForm/PaymentForm'
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
      <h1 style={{ color: '#748720' }}>🎉🎉Welcome to HooksDemoPage!🎉🎉</h1>
      <hr/>
      <h3>1.Use State Demo</h3>
      <MyAccount/>
      <hr/>
      <h3>2.Use Effect Demo</h3>
      <Blog/>
      <hr/>
      <h3>3.Use Ref and 4. use Reducer Demo</h3>
      <h4>TodosVariant1</h4>
      <TodosVarient1/>
      <h4>TodosVariant2</h4>
      <TodosVarient2/>
      <hr></hr>
      <h3>5. useId Demo</h3>
      <PaymentForm/>
      <hr></hr>
      <h3>6.useContext Demo</h3>
      <p>Refer PageContext</p>
    </div>
  )
}

export default HooksDemoPage
