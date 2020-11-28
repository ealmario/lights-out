import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .btn {
    border: none;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
    font-family: 'Poppins', sans-serif;
    font-size: 0.8125;
    font-weight: 600;
    margin-bottom: 0.8125rem;
    letter-spacing: 0.25px;
    padding: 1rem;
    text-transform: uppercase;
    transition: 300ms ease;
    width: 130px;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 16px rgba(0,0,0,0.15);
    }

    &:active {
      box-shadow: 0px 4px 4px rgba(0,0,0,0.3);
    }

    &:focus {
      outline: none;
    }
  }

  .btn-solid {
    background-color: #66ccff;

    &:hover {
      background-color: #70cfff;
    }
  }

  .btn-outline {
    border: 2px solid #66ccff;
    background: none;
    color: #66ccff;

    &:hover {
      background-color: #66ccff;
      color: #303030;
    }
  }

`

class Button extends Component {
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
      default:
        variantSettings = 'solid';
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