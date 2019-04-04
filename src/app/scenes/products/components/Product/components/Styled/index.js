import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  margin: 12px;
  height: 280px;
  width: 280px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 12px;
  justify-content: space-between;
  transition: all 0.4s;
`

export const AbsoluteButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;    
  background: linear-gradient(180deg, rgba(10, 212, 250, 0.86) 0%, rgba(37, 187, 241, 0.86) 100%);
  opacity: 0;  
  transition: opacity 0.2s;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Wrapper}:hover & {    
    opacity: 1;
  }
`

export const Points = styled.div`
  display: flex;
  align-items: center;
  font-size: 36px;
  color: white;
  padding: 12px 0;
  opacity: 1;
  > img {
    margin-left: 8px;
  }
`
export const Button = styled.div`  
  opacity: 1;
  padding: 8px 30px;
  font-size: 18px;
  text-align: center;
  border-radius: 30px;
  background: white;
  cursor: pointer;
`

export const Img = styled.img`
  border-bottom: 1px solid #dddd;
  padding: 8px;
`

export const Category = styled.div`
  font-size: 16px;
  color: #a3a3a3;
`

export const Name = styled.div`
  padding: 6px 0;
  font-size: 18px;
  color: #616161;
`