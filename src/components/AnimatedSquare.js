// import React, { useState } from "react";
// import { Flipper, Flipped } from "react-flip-toolkit";
// import "./styles.css";

// const AnimatedSquare = () => {
//   const [fullScreen, setFullScreen] = useState(false);
//   const toggleFullScreen = () => setFullScreen((prevState) => !prevState);

//   const Square = ({ toggleFullScreen }) => (
//     <Flipped flipId="square">
//       <div className="square" onClick={toggleFullScreen} />
//     </Flipped>
//   );

//   const FullScreenSquare = ({ toggleFullScreen }) => (
//     <Flipped flipId="square">
//       <div className="full-screen-square" onClick={toggleFullScreen} />
//     </Flipped>
//   );

//   return (
//     <Flipper flipKey={fullScreen}>
//       {fullScreen ? (
//         <FullScreenSquare toggleFullScreen={toggleFullScreen} />
//       ) : (
//         <Square toggleFullScreen={toggleFullScreen} />
//       )}
//     </Flipper>
//   );
// };

// export default AnimatedSquare;
