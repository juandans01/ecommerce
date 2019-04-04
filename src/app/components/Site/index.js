import React, { Component } from 'react'
import { connect } from 'react-redux'
import GlobalStyle from '../GlobalStyle'
import Header from '../Header'
import Products from '../../scenes/products'
import Loader from './components/Loader'
import { fetchUser } from '../../redux/actions/auth'

class Site extends Component {

  componentDidMount(){
    this.props.fetchUser()
  }

  render(){    
    console.log(this.props.auth)
    // Add loader
    return (      
      <div>
        <GlobalStyle/>        
        <Loader loading={!this.props.auth.authenticated}>
          { this.props.auth.authenticated && (
            <React.Fragment>
              <Header
                user={this.props.auth.user}
              />
              <Products/>
            </React.Fragment>
          )}          
        </Loader>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Site)