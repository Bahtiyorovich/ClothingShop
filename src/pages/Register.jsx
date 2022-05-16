import styled from 'styled-components'
import IMGBACK from '../assets/register.jpg'
import {desctop} from '../responsive'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    background:url(${IMGBACK});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;

`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: #fff;
    margin-top: 100px;
    margin-left: 20px;
`
const Form = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 20px;
    ${desctop({width: "50%"})}
`
const Input = styled.input`
    width: 100%;
    margin-bottom: 15px;
    padding: 10px 10px;
    border: 0.5px solid teal;
    opacity: 80%;
`
const Button = styled.button`
    width: 15%;
    margin-left: 25px;
    padding: 10px 10px;
    background-color: teal;
    color: white;
    font-size: 15px;
    border: 1px solid teal;
    transition: all 0.35s ease;
    cursor: pointer;

    &:hover
    {
        transform: scale(1.1);
        background-color: white;
        color: teal;
    }
    ${desctop({width: "40%"})}
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE ADD ACCOUNT</Title>
            <Form>
                <Input placeholder="Name"/>
                <Input placeholder="Lastname"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm password"/>
            </Form>
            <Button>TO REGISTER</Button>
        </Wrapper>
    </Container>
  )
}

export default Register
