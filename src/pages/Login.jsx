import styled from 'styled-components'
import IMGLOGIN from '../assets/loginIMG.jpg'
import {desctop} from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top:0;
    left:0;
    background-image: url(${IMGLOGIN});
    background-repeat:no-repeat;
    background-size: cover;


`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-top: 130px;
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
    width: 50%;
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
    ${desctop({width: "50%"})}
`
const Link = styled.a`
    font-size: 12px;
    color: #fff;
    margin-top: 15px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username"/>
                <Input placeholder="Password"/>
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER TO PASSWORD ?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
