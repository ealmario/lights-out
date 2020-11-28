import React, { Component } from 'react'
import styled from 'styled-components';

const StyledTD = styled.td`
  height: 3.75rem;
  width: 3.75rem;

  .cell {
    background-color: #424242;
    border-radius: 5px;
    cursor: pointer;
    height: 95%;
    width: 95%;
    transition: 300ms ease;

    &:hover {
      background-color: #525252;
    }
  }

  .cell-lit {
    background-color: #6ea5d8;
    box-shadow: 0px 0px 16px rgba(51,125,193, 1);

    &:hover {
      background-color: #8eb9e1;
    }
  }

  @media screen and (min-width: 425px) {
    height: 4.25rem;
    width: 4.25rem;
  }

  @media screen and (min-width: 768px) {
    height: 6.25rem;
    width: 6.25rem;
  }
`

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class Cell extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    // call up to the board to flip cells around this cell
    this.props.flipCellsAroundMe();
  }

  render() {

    return (
        <StyledTD>
          <div className={this.props.isLit ? 'cell cell-lit' : 'cell'} onClick={this.handleClick}></div>
        </StyledTD>
    )
  }
}


export default Cell