// Error boundary should be the class comp.

import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    state = {
        hasError : false
    }
    // catching the error
    // when there is runtime error -- serve the UI to display generic error msg
    // it can receive the error that was thrown as param
    // this method must return a value to update state
    static getDerivedStateFromError(error){
        console.log(error);
        return{
            hasError : true
        }
    }

    // working lifecycle hook to log the errors in third party services
  componentDidCatch (error, errorInfo) {
    console.log('===== Inside componentDidCatch =======');
    console.log(error); // the error in original source code
    console.log(errorInfo) // the error in compiled bundle.js

    // logging these errors in third party error logging service
    // So that many people's response and error will be displayed for develper.
  }

  render() {
    if(this.state.hasError)
    {
        return(
            <div className='alert alert-danger'>
                <p>Sorry! Some Error Occurred. Try again later</p>
          <p>If the error persists contact the Admin</p>
            </div>
        )
    }
    return this.props.children
  }
}

export default ErrorBoundary