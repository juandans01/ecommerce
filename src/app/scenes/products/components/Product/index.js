import React, { Component } from 'react'
import { Wrapper, Img, Category, Name } from './components/Styled'

export default class Product extends Component {

  render(){
    return (
      <Wrapper>
        <Img
          src={this.props.data.img.url}
        />
        <div>
          <Category>
            {this.props.data.category}
          </Category>
          <Name>
            {this.props.data.name}
          </Name>
        </div>
        <div>
          { this.props.data.cost}
        </div>
      </Wrapper>
    )
  }
}