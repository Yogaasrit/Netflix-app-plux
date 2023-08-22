import React from 'react'
import './Subscription.css'
const Subscription = () => {
  const renewStyle = {
    color: 'black',
    backgroundColor: 'ButtonHighlight',
    border: 'solid 3px grey'
  }
  return (
    <div className = "subscription text-center">

      {/* External CSS parent element - subscription */}
      <h3 className = "subscription-info">
            😎You are a Active Subscriber of NetFlex App 😎
      </h3>

      {/* Inline CSS - NEVER EVER USE THIS IN LIST/LOOP */}
      <h1 style = {{
        color: 'red',
        backgroundColor: 'orange',
        border: 'solid 5px red',
        padding: '20px'
      }}>👁️Your Subscription is about to end in Two Weeks👁️</h1>

      {/* Internal CSS */}
      <p style = {renewStyle}>Renew Now and get 50% discount🔥Apply Coupon 📜</p>
      <button type ="button" className = "subscription-button">Renew Now</button>
    </div>
  )
}

export default Subscription
