import React, { useState } from "react";

function Hook() {
  const [answer] = useState("Yes");
  return (
    <div>
      <h1>Is state important to know? {answer}</h1>
    </div>
  );
}

// class Hook extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default Hook;
