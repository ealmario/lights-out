import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from './utilities/Button';

const StyledDiv = styled.div`
  @font-face {
  font-family: neon;
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
  }

  .title-screen,
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header {
    margin-bottom: 3rem;
  }
  
  .neon {
    font-family: neon;
    color: #FB4264;
    font-size: 3rem;
    text-shadow: 0 0 3vw #F40A35;
  }

  .flux {
    font-family: neon;
    color: #426DFB;
    font-size: 3rem;
    text-shadow: 0 0 3vw #2356FF;
  }

  .neon {
    animation: neon 1s ease infinite;
    -moz-animation: neon 1s ease infinite;
    -webkit-animation: neon 1s ease infinite;
  }

  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 1vw #FA1C16, 0 0 3vw #FA1C16, 0 0 10vw #FA1C16, 0 0 10vw #FA1C16, 0 0 .4vw #FED128, .5vw .5vw .1vw #806914;
      color: #FED128;
    }
    50% {
      text-shadow: 0 0 .5vw #800E0B, 0 0 1.5vw #800E0B, 0 0 5vw #800E0B, 0 0 5vw #800E0B, 0 0 .2vw #800E0B, .5vw .5vw .1vw #40340A;
      color: #806914;
    }
  }

  .flux {
    animation: flux 2s linear infinite;
    -moz-animation: flux 2s linear infinite;
    -webkit-animation: flux 2s linear infinite;
    -o-animation: flux 2s linear infinite;
  }

  @keyframes flux {
    0%,
    100% {
      text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
      color: #28D7FE;
    }
    50% {
      text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
      color: #146C80;
    }
  }

  @media screen and (min-width: 768px) {
    .neon, .flux {
      font-size: 6rem;
    }
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
          <h1 className="header">
            <span className="neon">Lights</span> 
            <span className="flux">Out</span>
          </h1>
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

TitleScreen.propTypes = {
  gameStart: PropTypes.bool,
}