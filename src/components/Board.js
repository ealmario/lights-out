import React, { Component } from "react";
import styled from 'styled-components';

import Cell from "./Cell";
import Button from './utilities/Button';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .clicks {
    margin-top: 2rem;
  }

  .btn-container {
    margin-top: 2rem;
  }

  @media screen and (min-width: 425px) {
   .btn-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
   }

   @media screen and (min-width: 768px){
     .btn-container {
       width: 90%;
     }
   }
  }
`

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
  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
      clicks: 0
    }

    this.handleFromGameStart = this.handleFromGameStart.bind(this);
    this.addClicks = this.addClicks.bind(this);
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
    let { board } = this.state;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // Flip initial cell and its neighbors
    flipCell(y,x);
    // Left
    flipCell(y, x - 1);
    // Right
    flipCell(y, x + 1);
    // Top
    flipCell(y + 1, x);
    // Bottom
    flipCell(y - 1, x);

    this.addClicks();

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every(row => row.every(cell => !cell));
    this.setState({board, hasWon});
  }

  // Add clicks
  addClicks() {
    let clicks = this.state.clicks;
    clicks++

    this.setState({clicks});
  }

  /** Render game board or winning message. */

  renderBoard() {
    const { board } = this.state;
    const { nrows, ncols } = this.props;
    let tblBoard = [];

    for (let y = 0; y < nrows; y++) {
      let row = [];
      
      for (let x = 0; x < ncols; x++) {
        let coordinate = `${y}-${x}`
        row.push(<Cell isLit={board[y][x]} key={coordinate} flipCellsAroundMe={() => this.flipCellsAround(coordinate)}/>)
      }

      tblBoard.push(<tr key={y}>{row}</tr>)
    }

    return (
      <table>
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }

  handleFromGameStart(e) {
    e.preventDefault();
    this.props.fromGameStart();
  }

  render() {
    const { hasWon, clicks } = this.state;

    return hasWon ? (
      // if the game is won, just show a winning msg & render nothing else
      <StyledDiv>
        <h2 className="title">You have won!</h2>
        <p className="clicks">Number of Clicks: {clicks}</p>
        <div className="btn-container">
          <Button text="Back" variant="solid" onClick={this.handleFromGameStart} />
        </div>
      </StyledDiv>
    ) : (
      // make table board
      <StyledDiv>
        {this.renderBoard()}
        <div className="btn-container">
          <Button text="Back" variant="solid" onClick={this.handleFromGameStart} />
        </div>
      </StyledDiv>
    )
  }
}

export default Board;
