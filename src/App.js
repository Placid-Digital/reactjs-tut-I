import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import { useState , useEffect} from 'react';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import HooksCakeContainer from './Components/HooksCakeContainer';
import BurgerContainer from './Components/BurgerContainer';

   function App()
   {
      return (
        <Provider store={store}>
         <div className = 'App'>
              <HooksCakeContainer />
               <CakeContainer />
               <IceCreamContainer />
               <BurgerContainer />
         </div>
         </Provider>
      )
   }

   

// function App() {
//   return (
//     <div className="App">
//       <Board></Board>

//     </div>
//   )
// }

// function Board() {
//   const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
//   const [player, setPlayer] = useState(1);

//   useEffect(() => {
//     const combination = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ]

//      for (let c of combination){
//        if(marks[c[0]] ===1  && marks[c[1]] ===1 && marks[c[2]] ===1){
//          document.write('player 1 wins')
//        }
//        if(marks[c[0]] ===2  && marks[c[1]] ===2 && marks[c[2]] ===2){
//         document.write('player 2 wins')
//       }
//      }

//   }, [marks])


//   const changeMark = (i) => {
//     const m = [...marks];
//     if (m[i] === 0) {
//       m[i] = player;
//       setMarks(m);
//       setPlayer(player === 1 ? 2 : 1);
//     } else {
//       console.log('Please click on empty blocks')
//     }


//   }
//   return (
//     <div className="Board">
//       <div>
//         <Game mark={marks[0]} position={0} changeMark={changeMark}></Game>
//         <Game mark={marks[1]} position={1} changeMark={changeMark}></Game>
//         <Game mark={marks[2]} position={2} changeMark={changeMark}></Game>
//       </div>
//       <div>
//         <Game mark={marks[3]} position={3} changeMark={changeMark}></Game>
//         <Game mark={marks[4]} position={4} changeMark={changeMark}></Game>
//         <Game mark={marks[5]} position={5} changeMark={changeMark}></Game>
//       </div>
//       <div>
//         <Game mark={marks[6]} position={6} changeMark={changeMark}></Game>
//         <Game mark={marks[7]} position={7} changeMark={changeMark}></Game>
//         <Game mark={marks[8]} position={8} changeMark={changeMark}></Game>
//       </div>


//     </div>
//   )
// }

// function Game({ mark, changeMark, position }) {
//   return (
//     <div className={`Game mark${mark}`}
//       onClick={e => changeMark(position)}>
//     </div>
//   )
// }


// function Board() {
//   const [squares, setSquares] = React.useState(Array(9).fill(null))

//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       return
//     }
//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     setSquares(Array(9).fill(null))
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

// function calculateStatus(winner, squares, nextValue) {
//   return winner
//     ? `Winner: ${winner}`
//     : squares.every(Boolean)
//     ? `Scratch: Cat's game`
//     : `Next player: ${nextValue}`
// }

// function calculateNextValue(squares) {
//   return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }

// function App() {
//   return <Game />
// }



export default App;

