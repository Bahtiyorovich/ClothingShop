import styled from 'styled-components';
import {desctop} from '../responsive'

const Container = styled.div`
    display: flex;
    height: 30px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 300;
    color: white;
    background-color: teal;
    ${desctop({fontSize:"12px"})}
`

const Announcement = () => {
  return (
      <Container>
        React-Time-APP@./ Loyiha Reactda tayyorlandi.
      </Container>
  )
}

export default Announcement

