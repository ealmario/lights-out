import React, { Component } from 'react';
import styled from 'styled-components';

import Button from './utilities/Button';

const StyledDiv = styled.div`
    .title-screen,
    .btn-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .header {
        margin-bottom: 2rem;
    }
`;

class TitleScreen extends Component {
    constructor(props) {
        super(props);
        this.handleGameStart = this.handleGameStart.bind(this);
        this.handleObjectives = this.handleObjectives.bind(this);
        this.handleSettings = this.handleSettings.bind(this);
    }

    handleGameStart(e) {
        e.preventDefault();
        this.props.onGameStart();
    }

    handleObjectives(e) {
        e.preventDefault();
        this.props.onObjectives();
    }

    handleSettings(e) {
        e.preventDefault();
        this.props.onSettings();
    }

    render () {
        const { gameStart } = this.props;
        return(
            <StyledDiv>
                <h1 className="header">Lights Out</h1>
                <div className="btn-container">
                    {!gameStart && (
                        <>
                            <Button text="Start" variant="solid" onClick={this.handleGameStart} />
                            <Button text="Objectives" variant="outline" onClick={this.handleObjectives} />
                            <Button text="Settings" variant="outline" onClick={this.handleSettings} />
                        </>
                    )}
                </div>
            </StyledDiv>
        )
    }
}

export default TitleScreen;