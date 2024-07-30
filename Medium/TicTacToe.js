/*Given are three arrays. Each array represents a line from the game Tic Tac Toe. 
One player has 'X' as character and the other 'O'. 
Return true if a player has won the game. If no player has won, return 'Tie'.*/

function solveTicTacToe(line1, line2, line3) {
   let arrayOfLines = [
    line1[0].split(''),
    line2[0].split(''),
    line3[0].split('')
  ];

  let horizontalWin = arrayOfLines.some(row => row.every(cell => cell === row[0]));
  let verticalWin = arrayOfLines[0].some((_, colIndex) => arrayOfLines.every(row => row[colIndex] === arrayOfLines[0][colIndex]));
  let diagonalWin = [arrayOfLines[0][0], arrayOfLines[1][1], arrayOfLines[2][2]].every(cell => cell === arrayOfLines[0][0]) || 
                  [arrayOfLines[0][2], arrayOfLines[1][1], arrayOfLines[2][0]].every(cell => cell === arrayOfLines[0][2]);

  if (horizontalWin || verticalWin || diagonalWin) {
    return true;
  }

  return 'Tie';
}
