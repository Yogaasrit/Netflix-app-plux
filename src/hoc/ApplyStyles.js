// a higher-order component (HOC) is a function that
// takes a component as input and return a new comp as output

// applystyles is a arrow fn that takes the OriganalComponent(Hello or Bye)
// It creates a new component(NewComponent)
// Here the <div className="red-box"> is written.
const applyStyles = (OriginalComponent) => {
  // console.log(OriginalComponent);

  const NewComponent = (props) => {
    return (
      <div className="red-box">
        <OriginalComponent {...props}/>
        {/* props is used to display the name. */}
      </div>
    );
  }

  return NewComponent;
}

export default applyStyles;
