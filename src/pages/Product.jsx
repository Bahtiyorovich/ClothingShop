import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetters from '../components/NewsLetters'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {desctop} from '../responsive'

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${desctop({flexDirection: "column"})}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 85%;
    height: 85%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${desctop({padding: "0px 0px"})}

`

const Title = styled.h1`
    font-weight: 300;
`

const Desc = styled.p`
    margin: 20px 0;
`

const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`
const FilterContainer = styled.div`
    width: 100%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${desctop({flexDirection: "column"})}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 15px; 
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`

const FilterSize = styled.select`
    padding: 5px 10px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 300;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
`
const Button = styled.button`
    padding: 10px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    transition: all 0.35s ease;

    &:hover
    {
        transform: scale(1.1);
        background-color: teal;
        color: white;
    }
    ${desctop({padding: "4px"})}
`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8083.png" alt="fayl yuklanmadi"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Fashion Men Shirt</Title>
                <Desc>Ushbu ko'ylak "Fashion" brendi ostida taqdim etildi</Desc>
                <Price>($ 25)</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Colors</FilterTitle>
                        <FilterColor color="Green"/>
                        <FilterColor color="red"/>
                        <FilterColor color="Black"/>
                        <FilterColor color="grey"/>
                        <FilterColor color="Blue"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon/>
                        <Amount>1</Amount>
                        <AddIcon/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetters/>
        <Footer/>
    </Container>
  )
}

export default Product
