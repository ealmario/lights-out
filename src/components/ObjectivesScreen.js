import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: rgba(0,0,0,0.5);
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
        width: 90%;
    }
`;

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
            <StyledDiv>
                <div className="container">
                <h1>Objective</h1>

                <p>Originally developed by Tiger Electronics back in 1995, Lights Out is a puzzle game that involves the player turning off all the lights in the board with the least possible amount of clicks</p>

                <button onClick={this.handleBackToTitleScreen}>Back</button>

                </div>
            </StyledDiv>
        )
    }
}

export default ObjectivesScreen;