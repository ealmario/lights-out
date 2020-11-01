import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';


/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    // value should be between 0 and 1
    chanceLightStartsOn: 0.25
  }

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    const { nrows, ncols, chanceLightStartsOn } = this.props;
    // TODO: create array-of-arrays of true/false values

    // Rows
    for (let y = 0; y < nrows; y++) {
      let row = [];

      // Columns
      for (let x = 0; x < ncols; x++) {
        // To decide whether the cell is on or off
        // Returns a boolean value
        row.push(Math.random() < chanceLightStartsOn);
      }

      // Build the row
      board.push(row);
    }

    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    // this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    const { hasWon, board } = this.state;
    const { nrows, ncols } = this.props;
    let tblBoard = [];

    for (let y = 0; y < nrows; y++) {
      let row = [];
      
      for (let x = 0; x < ncols; x++) {
        let coordinate = `${y}-${x}`
        row.push(<Cell isLit={board[y][x]} key={coordinate}/>)
      }

      tblBoard.push(<tr key={y}>{row}</tr>)
    }

    return hasWon ? (
      // if the game is won, just show a winning msg & render nothing else
      <div>
        <h2>You have won!</h2>
      </div>
    ) : (
      // make table board
      <div>
        <table>
          <tbody>
            {tblBoard}
          </tbody>
        </table>
      </div>
    
    )
  }
}

export default Board;
