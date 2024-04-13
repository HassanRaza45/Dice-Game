// import styled from "styled-components";

// const RoleDice = ({ roleDice, currentDice }) => {
//   return (
//     <DiceContainer>
//       <div className="dice" onClick={roleDice}>
//         <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
//         <img src="public/images/ludo-board-vector-illustration-design-260nw-2177819291.webp" alt="" />
//       </div>
//       <p>Click on Dice to roll</p>
//     </DiceContainer>
//   );
// };

// export default RoleDice;

// const DiceContainer = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .dice {
//     cursor: pointer;
//   }

//   p {
//     font-size: 24px;
//   }
// `;
 
// import styled from "styled-components";

// const RoleDice = ({ roleDice, currentDice }) => {
//   return (
//     <DiceContainer>
//       <div className="board-container">
//         <img className="board" src="public/images/ludo-board-vector-illustration-design-260nw-2177819291.webp" alt="" />
//         <div className="dice" onClick={roleDice}>
//           <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" />
//         </div>
//       </div>
//       <p>Click on Dice to roll</p>
//     </DiceContainer>
//   );
// };

// export default RoleDice;

// const DiceContainer = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .board-container {
//     position: relative;
//   }

//   .board {
//     width: 300px; /* Adjust according to your image size */
//     height: auto; /* Adjust according to your image size */
//   }

//   .dice {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     cursor: pointer;
//     animation: rotateDice 1s infinite linear; /* Adding the rotation animation */
//   }

//   @keyframes rotateDice {
//     from {
//       transform: translate(-50%, -50%) rotate(0deg);
//     }
//     to {
//       transform: translate(-50%, -50%) rotate(360deg);
//     }
//   }

//   p {
//     font-size: 24px;
//   }
// `;
import React, { useState } from "react";
import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleClick = () => {
    // If the dice is not currently rolling, start rolling it
    if (!isRolling) {
      roleDice();
      // Set isRolling to true to indicate that the dice is currently rolling
      setIsRolling(true);
      // After 1 second, stop rolling the dice by setting isRolling back to false
      setTimeout(() => setIsRolling(false), 1000);
    }
  };

  return (
    <DiceContainer>
      <div className="board-container">
        <img
          className="board"
          src="public/images/ludo-board-vector-illustration-design-260nw-2177819291.webp"
          alt=""
        />
        {/* Apply the 'rolling' class only when the dice is rolling */}
        <div className={`dice ${isRolling ? 'rolling' : ''}`} onClick={handleClick}>
          {/* Make the dice picture smaller by adjusting the width */}
          <img src={`/images/dice/dice_${currentDice}.png`} alt="dice" style={{ width: '50px' }} />
        </div>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .board-container {
    position: relative;
  }

  .board {
    width: 300px; /* Adjust according to your image size */
    height: auto; /* Adjust according to your image size */
  }

  .dice {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    /* Apply the rotation animation only when the dice is rolling */
    animation: ${({ isRolling }) => isRolling ? 'rotateDice 1s infinite linear' : 'none'};
  }

  @keyframes rotateDice {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  p {
    font-size: 24px;
  }
`;
// import React, { useState } from "react";
// import styled from "styled-components";

// const RoleDice = ({ roleDice, currentDice }) => {
//   const [isRolling, setIsRolling] = useState(true); // Start rolling initially
//   const [hasSelectedNumber, setHasSelectedNumber] = useState(false);

//   const handleClick = () => {
//     // If a number has been selected, stop rolling the dice when clicked
//     if (hasSelectedNumber) {
//       setIsRolling(false);
//       roleDice();
//     }
//   };

//   // Function to handle selecting a number
//   const handleSelectNumber = () => {
//     // Set hasSelectedNumber to true when a number is selected
//     setHasSelectedNumber(true);
//   };

//   return (
//     <DiceContainer>
//       <div className="board-container">
//         <img
//           className="board"
//           src="public/images/ludo-board-vector-illustration-design-260nw-2177819291.webp"
//           alt=""
//         />
//         {/* Apply the 'rolling' class only when the dice is rolling */}
//         <div
//           className={`dice ${isRolling ? 'rolling' : ''}`}
//           onClick={handleClick}
//         >
//           {/* Make the dice picture smaller by adjusting the width */}
//           <img
//             src={`/images/dice/dice_${currentDice}.png`}
//             alt="dice"
//             style={{ width: '50px' }}
//             onClick={handleSelectNumber} // Call handleSelectNumber when the dice is clicked
//           />
//         </div>
//       </div>
//       <p>Click on Dice to roll</p>
//     </DiceContainer>
//   );
// };

// export default RoleDice;

// const DiceContainer = styled.div`
//   margin-top: 48px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .board-container {
//     position: relative;
//   }

//   .board {
//     width: 300px; /* Adjust according to your image size */
//     height: auto; /* Adjust according to your image size */
//   }

//   .dice {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     cursor: pointer;
//     /* Apply the rotation animation only when the dice is rolling */
//     animation: ${({ isRolling }) => isRolling ? 'rotateDice 1s infinite linear' : 'none'};
//   }

//   @keyframes rotateDice {
//     from {
//       transform: translate(-50%, -50%) rotate(0deg);
//     }
//     to {
//       transform: translate(-50%, -50%) rotate(360deg);
//     }
//   }

//   p {
//     font-size: 24px;
//   }
// `;
 