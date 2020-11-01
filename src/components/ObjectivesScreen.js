import React, { Component } from 'react';

class ObjectivesScreen extends Component {
    constructor (props) {
        super(props);
        this.handleBackToTitleScreen = this.handleBackToTitleScreen.bind(this);
    }

    handleBackToTitleScreen() {
        this.props.fromObjectives();
    }

    render() {
        return(
            <div>
                <h1>Objective</h1>

                <p>Originally developed by Tiger Electronics back in 1995, Lights Out is a puzzle game that involves the player turning off all the lights in the board with the least possible amount of clicks</p>
                
                <button onClick={this.handleBackToTitleScreen}>Back</button>
            </div>
        )
    }
}

export default ObjectivesScreen;