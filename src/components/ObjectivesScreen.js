import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './utilities/Button';

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
        background: #424242;
        border-radius: 4px;
        padding: 4rem 2rem;
        width: 90%;

        h2 {
            margin-bottom: 3rem;
        }

        p {
            margin-bottom: 3rem;
            line-height: 1.5rem;
        }
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
                    <h2>Objectives</h2>

                    <p>Originally developed by Tiger Electronics back in 1995, Lights Out is a puzzle game that involves the player turning off all the lights in the board with the least possible amount of clicks</p>

                    <Button text="Back" variant="solid" onClick={this.handleBackToTitleScreen}/>

                </div>
            </StyledDiv>
        )
    }
}

export default ObjectivesScreen;