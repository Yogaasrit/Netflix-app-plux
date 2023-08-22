import React from 'react'
import PropTypes from 'prop-types';
const Bye = (props) => {
  return (
    <div>
      <h3>Bye {props.name}!</h3>
    </div>
  )
}
Bye.propTypes = {
  name: PropTypes.string
}
export default Bye
