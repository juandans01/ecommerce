import React, { Component } from 'react'
import Points from '../../components/Points'
import { Wrapper, User, Name } from './components/Styled'
import logo from './assets/logo.svg'

export default class Header extends Component {
  render(){
    return (
      <Wrapper>
        <div>
          <img
            alt='logo'
            src={logo}       
          />
        </div>
        <User>
          <Name>
             {this.props.user.name }
          </Name>
          <Points>
             { this.props.user.points }
          </Points>
        </User>
      </Wrapper>
    )
  }
}