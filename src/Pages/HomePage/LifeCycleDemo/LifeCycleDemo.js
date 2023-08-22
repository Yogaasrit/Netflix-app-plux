import React, { Component } from 'react'

export class LifeCycleDemo extends Component {
  // optional to have constructor
  constructor () {
    // must call super -- because we inherit Component class
    super();
    console.log('1. Inside Constructor');

    // ideal place for your initial component-wide data
    this.state = {
      isLoading: true,
      featureName: '',
      isError: false
    }
  }

  // lifecycle hook / method
  componentDidMount () {
    console.log('3. Inside componentDidMount');
    // this method will be executed ONLY ONCE after initial rendering
    // this method will be called when the component's UI comes into view
    // this is the ideal place for you to send REST API Calls
    // after fetching the data from REST API backend, update the state
    // mocking the REST API call using timeout

    setTimeout(() => {
      // For succesful response

      this.setState({
        isLoading: false,
        featureName: 'Detailed Description of Life Cycle Hooks'
      })

      // // For Erorr
      // this.setState({
      //     isLoading : false,
      //     isError : true
      // })
    }, 5000);
  }
  // let's decide whether the re-rendering to happen or not

  shouldComponentUpdate (nextProps, nextState) {
    // when the state is updated -- this will be called
    // it must either return true or false
    // compare the prevState (this.state) and nextState
    // if changes found, then return true else return false
    console.log('4 . Inside shouldComponentUpdate Method');
    console.log(this.state);
    console.log(nextState);
    return true;
  }

  // whether the re-rendering is over or not
  componentDidUpdate (prevProps, prevState) {
    console.log('======== 6. Inside componentDidUpdate ========');
    // called immediately after update in JSX (after re-rendering)
    // will NEVER be called after initial rendering
    // ideal place for tiny dom manupulations like style updates
    document.getElementById('myPara').style.color = 'green';
  }

  render () { // render method will be called immediately -- Initial Rendering
    console.log('2. and 5. Inside Render Method');
    if (this.state.isLoading) {
      return (
        <div>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )
    }

    if (this.state.isError) {
      return (
        <div className = "alert alert-danger">Error occured! Please try Again...</div>
      )
    }

    return (
      <div>
        <h5>Life Cycle Demo</h5>
        <p id = "myPara">We are learning about feature : {this.state.featureName}</p>
      </div>
    )
  }
}

export default LifeCycleDemo
