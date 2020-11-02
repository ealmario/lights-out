import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .btn {
    border: none;
    border-radius: 5px;
    padding: 1rem;
    width: 130px;
    margin-bottom: 0.5rem;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }

  .btn-solid {
    background-color: #66ccff;
  }

  .btn-outline {
    border: 2px solid #66ccff;
    background: none;
    color: #66ccff;
  }

`

class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let variantSettings;

    switch (this.props.variant) {
      case 'solid':
        variantSettings = 'solid';
        break;
      case 'outline':
        variantSettings = 'outline';
        break;
      case 'text':
        variantSettings = 'text';
        break;
    }

    const { text, onClick } = this.props;
    
    return(
      <StyledDiv role="button">
        <button className={`btn btn-${variantSettings}`} onClick={onClick}>{text}</button>
      </StyledDiv>
    )
  }
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func
}

export default Button;