import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './utilities/Button';

const StyledDiv = styled.div`
  background-color: rgba(0,0,0,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;   
  z-index: 2;

  .container {
    background: #424242;
    border-radius: 4px;
    box-shadow: 2px 4px 8px rgba(0,0,0,0.25);
    padding: 4rem 2rem;
    width: 90%;

    h2 {
        margin-bottom: 1rem;
    }

    p {
        font-size: 0.75rem;
        margin-bottom: 2rem;
    }
  }

  .content {
      margin-bottom: 2rem;
  }

  label, 
  select {
      font-size: 1rem;
  }

  select {
    margin-left: 1rem;
    padding: 0.5rem 1rem;

    &:focus {
        outline: none;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      width: 500px;
    }
  }
`

class SettingsScreen extends Component {
    constructor (props) {
        super(props);
        this.handleBackToTitleScreen = this.handleBackToTitleScreen.bind(this);
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
    }

    handleBackToTitleScreen() {
        this.props.fromSettings();
    }

    handleChangeBoard(e) {
        const value = parseInt(e.target.value);
        this.props.changeBoardSize(value);
    }

    render() {
        console.log(this.props);
        console.log(this.props.ncols);
        console.log(this.props.nrows);
        return(
            <StyledDiv>
                <div className="container">
                    <h2>Settings</h2>
                    <p>Changes are automatically saved</p>
                    <div className="content">
                        <label htmlFor="board-size">Board Size:</label>
                        <select name="board-size" id="board-size" onChange={this.handleChangeBoard} defaultValue="5">
                            <option value="3">3x3</option>
                            <option value="5">5x5</option>
                            <option value="7">7x7</option>
                        </select>
                    </div>
                    <Button variant="solid" text="Back" onClick={this.handleBackToTitleScreen} />
                </div>
            </StyledDiv>
        )
    }
}

export default SettingsScreen;