import React, { Component } from 'react';
import styled from 'styled-components';

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

    .btn {
        padding: 0.75rem;
        width: 130px;
        margin-bottom: 0.5rem;
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
        console.log(this.props);
        const { objectives, settings } = this.props;
        return(
            <StyledDiv>
                <h1 className="header">Lights Out</h1>
                <div className="btn-container">
                    <button className="btn btn-solid" onClick={this.handleGameStart}>Start</button>
                    <button className="btn btn-outline" onClick={this.handleObjectives}>Objectives</button>
                    <button className="btn btn-outline" onClick={this.handleSettings}>Settings</button>
                </div>
            </StyledDiv>
        )
    }
}

export default TitleScreen;