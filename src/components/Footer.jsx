import styled from "styled-components";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import IMGPAY from '../assets/payments.png';
import {desctop} from '../responsive'

const Container = styled.div`
  display: flex;
  box-shadow: 0px 0px 0px 0.2px #A9A9A9; 
  ${desctop({flexDirection: "column", alignItems: "center"})}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  ${desctop({marginLeft: "20px"})}
`;
const Title = styled.h3`
  margin-top: 30px;
  margin-bottom: 30px;
  color: grey;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 40%;
  margin-bottom: 10px;
  margin-right: 15px;
`;

const Right = styled.div`
  flex: 1;
`;
const Payments = styled.img`
    width: 40%;
`

const ContactItem = styled.div`
    margin-bottom: 10px;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
`;

const Logo = styled.h1`
  color: grey;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialsContainer = styled.div`
  display: flex;
  margin-top: 100px;
`;
const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  margin-left: 15px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.color};
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ONLINE MARKET</Logo>
        <Desc>
          In our online store you can find seasonal and latest fashion clothes
          for the whole family!
        </Desc>
        <SocialsContainer>
          <SocialIcon color="55ACEE">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="54AC5F">
            <TelegramIcon />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <MailOutlineIcon />
          </SocialIcon>
        </SocialsContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact </Title>
        <ContactItem>
          <TelegramIcon style={{color: 'lightblue', marginRight: 8,}}/> @sherzod1797programmer
        </ContactItem>
        <ContactItem>
          <PhoneEnabledOutlinedIcon style={{color: 'lightblue', marginRight: 8}}/> +998 93 360 9798
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{color: 'lightblue', marginRight: 8}}/> yoqubovsherzod1997@gmail.com
        </ContactItem>
        <Payments  src={IMGPAY} alt="fayl yuklanmadi"/>
      </Right>
    </Container>
  );
};

export default Footer;
