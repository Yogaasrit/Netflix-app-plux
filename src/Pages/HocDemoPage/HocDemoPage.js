import React from 'react'
import { Helmet } from 'react-helmet';
import applyStyles from '../../hoc/ApplyStyles'
import Bye from './Bye/Bye'
import Hello from './Hello/Hello'

// a higher-order component (HOC) is a function that
// takes a component as input and return a new comp as output

// applystyles is a function that takes Hello and Bye as a input.
// result is stored in a styledHello and stylesBye

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);
const HocDemoPage = () => {
  return (
    <div>
      <Helmet>
        <title>
          HOC Demo
        </title>
      </Helmet>
      <h1 style={{ color: '#748720' }}>🎉🎉Welcome to HocDemoPage!🎉🎉</h1>
      {/* displaying in styledHello and stylesBye */}
      <StyledHello name="Yogaasri"/>
      <StyledBye name = "Yogaa"/>
    </div>
  )
}

export default HocDemoPage
