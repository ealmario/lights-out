import React, { Component } from "react";
import Board from "./Board";
import styled from "styled-components";

/** Simple app that just shows the LightsOut game. */
const AppDiv = styled.div`
  background-color: #003;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

class App extends Component {
  render() {
    return (
      <AppDiv>
        <Board />
      </AppDiv>
    );
  }
}

export default App;
