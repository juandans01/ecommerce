import React, { Component } from 'react'
import styled from 'styled-components'
import chevron from '../../assets/chevron.svg'

const Wrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  transform: ${props => props.direction === 'right' ? 'rotate(180deg)' : 'rotate(0deg)'};
`

export default class ChevronButton extends Component {

  render(){
    return (
      <Wrapper
        direction={this.props.direction}
        onClick={this.props.onClick}
      >
        <img
          src={chevron}
          alt='chevron'
        />
      </Wrapper>
    )
  }
}