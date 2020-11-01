import React, { Component } from 'react';

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
            <div>
                <h2>Settings</h2>
                <div className="dd-wrapper">
                    <label htmlFor="board-size">Board Size:</label>
                    <select name="board-size" id="board-size" onChange={this.handleChangeBoard} defaultValue="5">
                        <option value="3">3x3</option>
                        <option value="5">5x5</option>
                        <option value="7">7x7</option>
                    </select>
                </div>
                <button onClick={this.handleBackToTitleScreen}>Back</button>
            </div>
        )
    }
}

export default SettingsScreen;