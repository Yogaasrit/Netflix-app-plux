import React from 'react'
import MockFragment from './MockFragment/MockFragment'
import { Helmet } from 'react-helmet';
import ErrorBoundary from '../../Containers/Shared/ErrorBoundary/ErrorBoundary';

const AboutUs = () => {
  const x = 10;
  return (
  
    <ErrorBoundary>
    <h1>AboutUs Page</h1>
    <h2> Demo of MockFragment page</h2>
    <MockFragment>
      <Helmet>
          <title>About Us </title>
        </Helmet>
      {/* <MockFragment><h1>Hi</h1></MockFragment> */}
      {/* inner component */}
    <p> Our own fragment of component is serving this UI.</p>
    <p> Refer MockFragment comp in code base.</p>
    <p>{x()}</p>
    </MockFragment>
    </ErrorBoundary>
  )
}

export default AboutUs