import styled from 'styled-components'

// add actual loader

export default styled.div`
  background: white;
  transition: opacity 0.4s;
  opacity: ${props => props.loading ? '0' : '1'};
`