import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 16px 10vw;
`

export const Content = styled.div`
  padding: 12px 0;  
  border-bottom: 1px solid #dddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Numbers = styled.div`
  padding-right: 16px;
  border-right: 1px solid #dddd;
`

export const Sort = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: center;
  > p {
    padding-right: 8px;
    color: #a3a3a3;
    font-weight: 400;
  }
`

export const Button = styled.div`
  margin: 0 8px;
  padding: 8px 12px;
  color: ${props => props.current ? 'white' : '#a3a3a3'};
  background-color: ${props => props.current ? props.theme.app.primaryColor : '#ededed'};
  border-radius: 21px;
  cursor: pointer;
`

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const PaginationButtons = styled.div`
  display: flex;  
`