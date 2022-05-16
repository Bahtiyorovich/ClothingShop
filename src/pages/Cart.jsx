import Announcement  from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import IMG0 from '../assets/shoes.png'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import BAG from '../assets/woman-bag.png'
import MENBAG from '../assets/men-bag.png'
import JACKET from '../assets/Daco_4949013.png'
import DRESS from '../assets/red-dress.png'
import {desctop, mobile} from '../responsive'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    color: grey;
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: 1px solid teal;
    color: grey;
    background-color: white;
    transition: all 0.35s ease;

    &:hover 
    {
        background-color: teal;
        color: white;
    }
    ${desctop({padding: "5px", fontWeight: 200, fontSize: 10})}
`

const TopTexts = styled.div``
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 15px;
    ${mobile({fontSize: 10, display: "flex", margin: "8px"})}
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    ${desctop({flexDirection: "column"})} 
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    margin-top: 20px;
`
const Image = styled.img`
    width: 23vw;
    height: 70vh;
    ${desctop({height: "35vh", width: "25vw"})}
`
const Detail = styled.div`
    display: flex;
    justify-content: space-arround;
    padding: 20px;
    margin-left: 20px;
    flex-direction: column;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;

`
const ProductAmount = styled.div`
    font-size: 25px;
    margin: 10px;
`
const ProductPrice = styled.span`
    font-size: 25px;
    font-weight: 200;
`
const Hr = styled.hr`
    color: grey;
`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>                
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7492.png" alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> Shoes</ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="brown"/>
                                <ProductSize><b>Size: </b> 38</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 55
                            </ProductPrice>
                        </PriceDetail>
                        <Hr/>
                        <ProductDetail>
                            <Image src={IMG0} alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> Shoes</ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size: </b> 38</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>1</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 59
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src={JACKET} alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> JACKET </ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size: </b> 48</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 100
                            </ProductPrice>
                        </PriceDetail>
                        <Hr/>
                        <ProductDetail>
                            <Image src={DRESS} alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> Red Dress </ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size: </b> 48</ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 120
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src={MENBAG} alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> Brown Bag</ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="brown"/>
                                <ProductSize><b>Size: </b> </ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 30
                            </ProductPrice>
                        </PriceDetail>
                        <Hr/>
                        <ProductDetail>
                            <Image src={BAG} alt="fayl yuklanmadi"/>
                            <Detail>
                                <ProductName><b>Product:</b> Nice red Bag</ProductName>
                                <ProductId><b>ID: </b> 1234567890</ProductId>
                                <ProductColor color="red"/>
                                <ProductSize><b>Size: </b> </ProductSize>
                            </Detail>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <AddIcon/>
                                <ProductAmount>2</ProductAmount>
                                <RemoveIcon/>
                            </ProductAmountContainer>
                            <ProductPrice>
                                $ 30
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
