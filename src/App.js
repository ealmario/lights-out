import React, { Component } from "react";
import Board from "./components/Board";
import styled from "styled-components";

import TitleScreen from './components/TitleScreen';
import ObjectivesScreen from './components/ObjectivesScreen';
import SettingsScreen from './components/SettingsScreen';

/** Simple app that just shows the LightsOut game. */
const AppDiv = styled.div`
  background-color: #303030;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  width: 100vw;
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameStart: false,
      objectives: false,
      settings: false,
      nrows: 5,
      ncols: 5,
      chanceLightStartsOn: 0.25, // value should be between 0 and 1
    }
    this.onGameStart = this.onGameStart.bind(this);
    this.onObjectives = this.onObjectives.bind(this);
    this.onSettings = this.onSettings.bind(this);
    this.fromObjectives = this.fromObjectives.bind(this);
    this.fromSettings = this.fromSettings.bind(this);
    this.fromGameStart = this.fromGameStart.bind(this);
    this.changeBoardSize = this.changeBoardSize.bind(this);
  }

  onGameStart() {
    this.setState({gameStart : true});
  }

  onObjectives() {
    this.setState({objectives : true});
  }

  onSettings() {
    this.setState({settings : true});
  }

  fromObjectives() {
    this.setState({objectives: false});
  }

  fromSettings() {
    this.setState({settings: false});
  }

  fromGameStart() {
    this.setState({gameStart: false});
  }
  
  changeBoardSize(inp) {
    this.setState({ nrows: inp, ncols: inp })
  }

  render() {
    const { gameStart, objectives, settings, nrows, ncols, chanceLightStartsOn } = this.state;

    return (
      <AppDiv>
        <TitleScreen 
          gameStart={gameStart}
          objectives={objectives}
          settings={settings}
          onGameStart={this.onGameStart}
          onObjectives={this.onObjectives}
          onSettings={this.onSettings}
        />
        {gameStart && 
          <Board 
            nrows={nrows}
            ncols={ncols}
            chanceLightStartsOn={chanceLightStartsOn}
            fromGameStart={this.fromGameStart}
            onSettings={this.onSettings}
          />}
        {objectives  && <ObjectivesScreen fromObjectives={this.fromObjectives}/>}
        {settings  && 
          <SettingsScreen 
            fromSettings={this.fromSettings} 
            changeBoardSize={this.changeBoardSize} 
            nrows={nrows} 
            ncols={ncols}
          />}
      </AppDiv>
    );
  }
}

export default App;
