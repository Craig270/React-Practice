import React from "react";

function Conditional(props) {
  return (
    <div>
      {props.isLoading ? (
        <h1>Is Loading....</h1>
      ) : (
        <h1>This is some cool conditinal rendering stuff!</h1>
      )}
    </div>
  );
}

export default Conditional;
