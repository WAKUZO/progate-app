// import React from 'react';

// class CountUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   // handleClickメソッドを定義してください
//   handleClick() {
//     this.setState({ count: this.state.count + 1 })
//   };

//   render() {
//     return (
//       <div style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//       }}>
//         <h1>
//           {this.state.count}
//         </h1>
//         {/* <button>タグ内でonClickイベントを追加してください */}
//         <button onClick={() => { this.handleClick() }}>+</button>
//       </div >
//     );
//   }
// }

// export default CountUp;


// Hooksで書いた

import React, { useState } from 'react';

export default function CountUp() {

  const [count, setCount] = useState(0)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <h1>
        {count}
      </h1>
      {/* <button>タグ内でonClickイベントを追加してください */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div >
  );
}




