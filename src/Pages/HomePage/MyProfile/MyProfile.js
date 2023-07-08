import React, { Component } from 'react'

export class MyProfile extends Component {

state = {
    profileName : 'Yogaasri BE'
}
handleChangeProfileName = (event) =>{ //Onchange it will store in event
    // console.log(event);
    // console.log(event.target.value);
    this.setState({
        profileName : event.target.value
    })
}
  render() {
    return (
      <div>
        <h3>Profile Info</h3>
        {/* value =  {this.state.profileName}> Cant Change in text box change to defaultValue = .. */}
        {/* controlled component - The form value is controlled by react */}
        <input type = "text"
           value =  {this.state.profileName}
           onChange = {this.handleChangeProfileName}>
        </input>
        <p>profileName : {this.state.profileName}</p>
      </div>
    )
  }
}

export default MyProfile