import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import {mobile, desctop} from '../responsive'

const Container = styled.div`
    height: 60px;
    box-shadow: 0px 1px #F0FFF0;
`
const Wrapper = styled.div`
    padding: 10px 20px; 
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    display: flex;
    border: 0.5px solid lightgrey;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width: "40px" })}
    ${desctop({width: "70px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    font-size: 20px;
    font-weight: 400;
    margin-left: 100px;
    ${mobile({display: "none" })}
    ${desctop({fontSize: 10, fontWeight: 500, marginLeft:"50px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${desctop({flex: 1.5})}
`
const MenuItem = styled.p`
    margin-right: 15px;
    cursor: pointer;
    ${desctop({fontSize: 12})}
    ${mobile({fontSize: 12})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Left>
              <Language>EN</Language>
              <SearchContainer>
                  <Input placeholder='Search...'/>
                  <SearchIcon style={{color: 'grey', fontSize: 16}}/>
              </SearchContainer>
          </Left>
          <Center>
              ONLINE CLOTHINGS SHOP
          </Center>
          <Right>
              <MenuItem>REGISTER</MenuItem>
              <MenuItem>SIGN IN</MenuItem>
              <MenuItem>
                <LocalGroceryStoreOutlinedIcon/>
              </MenuItem>
          </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
