import styled from 'styled-components'
import banner from '../../assets/banner.png'

export const Wrapper = styled.div`
`

export const BannerImage = styled.div`
  height: 412px;
  background: url(${banner}) no-repeat 100% 0 / cover;
`

export const BannerTitle = styled.div`
  position: absolute;
  left: 10vw;
  bottom: 30px;
  font-size: 36px;
  font-weight: 600;
  color: white;
`

export const Banner = styled.div`
  position: relative;
`

export const List = styled.div`
  padding: 24px 10vw;
  display: flex;
  justify-content: center;
`

export const Page = styled.div`
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-wrap: wrap;
`

export const Footer = styled.div`
  padding: 24px 10vw;
  display: flex;
  justify-content: space-between;
  > div { 
    display: flex;
  }
`