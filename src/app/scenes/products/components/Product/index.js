import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux' 
import { fetchUser } from '../../../../redux/actions/auth'
import { Wrapper, Img, Category, Name, AbsoluteButton, Points, Button } from './components/Styled'
import Coin from '../../../../assets/coin.svg'

class Product extends Component {

  redeemProduct = async() => {
    try {      
      const data = {
        productId: this.props.data._id
      }
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/redeem`, data)
      console.log('here')
      this.props.fetchUser()
    } catch (err) {
      console.log(err)
    }
  }

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
        <AbsoluteButton>
          <Points>
            { this.props.data.cost }
            <img
              src={Coin}
              alt='coin'
            />
          </Points>
          <Button onClick={this.redeemProduct}>
            Redeem now
          </Button>  
        </AbsoluteButton>      
      </Wrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Product)