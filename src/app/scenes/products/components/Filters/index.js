import React, { Component } from 'react'
import { 
  Wrapper, 
  Content, 
  Numbers,
  Sort,
  Button,
  LeftWrapper,
  PaginationButtons
} from './components/Styled'
import ChevronButton from '../../../../components/ChevronButton';

export default class Filters extends Component { 

  render(){

    return (
      <Wrapper>
        <Content>
          <LeftWrapper>
            <Numbers>
              {`${this.props.currentCount} of ${this.props.totalCount} products`}
            </Numbers>
            <Sort>
              <p>Sort by</p>
              <Button 
                current={this.props.current === 'recent'}
                onClick={() => {this.props.onChange('recent')}}
              >
                Most recent
              </Button>
              <Button
                current={this.props.current === 'lowest'}
                onClick={() => {this.props.onChange('lowest')}}
              >
                Lowest price
              </Button>
              <Button
                current={this.props.current === 'highest'}
                onClick={() => {this.props.onChange('highest')}}
              >
                Highest price
              </Button>
            </Sort>
          </LeftWrapper>
          <PaginationButtons>
            <ChevronButton onClick={() => {this.props.onPaginationChange('back')}} direction='left'/>
            <ChevronButton onClick={() => {this.props.onPaginationChange('next')}} direction='right'/>
          </PaginationButtons>
        </Content>
      </Wrapper>
    )
  }
}