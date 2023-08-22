import React from 'react'
import PropTypes from 'prop-types';
const Hello = (props) => {
  return (
    <div>
      {/* className = "red-box" */ }
      {/* Instead of writing the same styling or code in hello and bye we use hocpage */}
      <h3>Hello {props.name}!</h3>
    </div>
  )
}

Hello.propTypes = {
  name: PropTypes.string
}
export default Hello
