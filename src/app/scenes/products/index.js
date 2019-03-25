import React, { Component } from 'react'
import _ from 'lodash'
import axios from 'axios'
import {
  Wrapper,
  Banner,
  BannerImage,
  BannerTitle,
  Page,
  List,
  Footer
} from './components/Styled'
import Product from './components/Product'
import Filters from './components/Filters'
import ChevronButton from '../../components/ChevronButton';

export default class Products extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: [],
      productsPerPage: 12,
      page: 0,
      productsCount: 0,
      currentFilter: 'recent'
    }
    this.originalProducts = []
  }
  
  componentDidMount(){
    this.fetchProducts()
  }

  fetchProducts = async() => {
    try {      
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/products`)
      this.originalProducts = res.data      
      const productsCount = res.data.length
      const filteredProducts = this.filterProducts()      
      const products = this.paginateProducts(filteredProducts)
      this.setState({
        products: products,
        productsCount: productsCount        
      })
    } catch (err) {
      console.log(err)
    }
  }

  paginateProducts = (products) => {
    let productsArray = []
    let rowCount = 0
    let row = []
    for (let i = 0; i < products.length; i++) {
      row.push(products[i])        
      if (row.length >= this.state.productsPerPage || i === products.length - 1) {
        productsArray[rowCount] = row
        row = []
        rowCount += 1
      }
    }
    return productsArray
  }

  filterProducts = (filter = this.state.currentFilter) => {
    const products = _.clone(this.originalProducts)
    if (filter === 'recent') {
      return products
    }
    if (filter === 'lowest') {
      return products.sort((a, b) => {
        if (a.cost < b.cost) {
          return -1
        }
        if (a.cost > b.cost) {
          return 1
        }
        return 0
      })
    }
    if (filter === 'highest') {
      return products.sort((a, b) => {
        if (a.cost > b.cost) {
          return -1
        }
        if (a.cost < b.cost) {
          return 1
        }
        return 0
      })       
    }

    return this.originalProducts
  }

  paginate = (direction) => {    
    if (direction === 'back') {
      if (this.state.products[this.state.page - 1]) {
        this.setState({
          page: this.state.page - 1
        })
      }
    } 
    if (direction === 'next') {
      if (this.state.products[this.state.page + 1]) {
        this.setState({
          page: this.state.page + 1
        })
      }
    }
  }

  onFilterChange = (filter) => {
    if (this.state.currentFilter !== filter) {
      let products = this.filterProducts(filter)
      products = this.paginateProducts(products)
      this.setState({
        currentFilter: filter,
        products: products,
        page: 0
      })
    }
  }

  getCurrentCount = () => {
    let count = 0
    for (let i = 0; i <= this.state.page; i++) {
      count += this.state.products[i].length
    }
    return count
  }

  render(){
    return (
      <Wrapper>
        <Banner>
          <BannerImage/>
          <BannerTitle>Electronics</BannerTitle>
        </Banner>
        { this.state.products.length > 0 && (
          <React.Fragment>
            <Filters
              totalCount={this.state.productsCount}
              currentCount={this.getCurrentCount()}
              onPaginationChange={this.paginate}
              current={this.state.currentFilter}
              onChange={this.onFilterChange}
            />
            <List>
            { this.state.products.map((page, index) => (
              <Page 
                key={index}
                visible={this.state.page === index}
              >
                { page.map((product, index) => (
                  <Product 
                    key={index}
                    data={product}
                  />                
                ))}
              </Page>
              ))}
              
            </List>
            <Footer>
              <p>
                {`${this.getCurrentCount()} of ${this.state.productsCount} products`} 
              </p>
              <div>
                <ChevronButton direction='left' onClick={() => this.paginate('back')}/>
                <ChevronButton direction='right' onClick={() => this.paginate('next')}/>
              </div>
            </Footer>
          </React.Fragment>
        )}                
      </Wrapper>
    )
  }
}