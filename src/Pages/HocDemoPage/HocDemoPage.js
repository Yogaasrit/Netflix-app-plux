import React from 'react'
import applyStyles from '../../hoc/ApplyStyles'
import Bye from './Bye/Bye'
import Hello from './Hello/Hello'

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);
const HocDemoPage = () => {
  return (
    <div>
      <h1>HocDemoPage</h1>
      <StyledHello name="Yogaasri"/>
      <StyledBye name = "Yogaa"/>
    </div>
  )
}

export default HocDemoPage