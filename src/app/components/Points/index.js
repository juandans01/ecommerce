import React, { Component } from 'react'
import Coin from './../../assets/coin.svg'
import { Wrapper, Number } from './components/Styled'

export default class Points extends Component {

  render(){    
    return (
      <Wrapper>
        <Number>
          { this.props.children }
        </Number>
        <img
          alt='coin'
          src={Coin}        
        />        
      </Wrapper>
    )
  }
}