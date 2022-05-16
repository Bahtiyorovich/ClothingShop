import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import {desctop,mobile} from '../responsive'

const Container = styled.h1`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; 
`
const Title = styled.div`
    font-size: 70px;
    margin-bottom: 20px;
    color: grey;
    ${desctop({fontSize: 40})}
`
const Desc = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;
    color: grey;
    ${desctop({fontSize: "15px"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 15px;
`
const Button = styled.button`
    width: 60px;
    flex: 1;
    background-color: teal;
    color: white;
    border: none;
    cursor: pointer;
`

const NewsLetters = () => {
  return (
    <Container>
      <Title>NewsLetters</Title>
      <Desc>Get timely updates from your favorite products </Desc>
      <InputContainer>
        <Input placeholder="Your Email"/>
        <Button>
            <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetters
