// a higher-order component (HOC) is a function that
// takes a component as input and return a new comp as output

const applyStyles = (OriginalComponent) => {
    // console.log(OriginalComponent);
  
    const NewComponent = (props) => {
      return (
        <div className="red-box">
          <OriginalComponent {...props}/>
        </div>
      );
    }
  
    return NewComponent;
  }
  
  export default applyStyles;