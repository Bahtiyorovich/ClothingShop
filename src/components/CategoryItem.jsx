import styled from 'styled-components';
 

const Container = styled.div`
    flex:1;
    margin: 20px;
    height: 60vh;
    position: relative;
    overflow: hidden;
    background-color: lightgrey;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #fff;
    color: #f5ff;
    cursor: pointer;
    font-weight: 600;
    box-shadow: 0.5px 0px 1.5px 0.5px;
    transition: all 0.35s ease;

    &:hover
    {
        transform: scale(1.1);
        background-color: #f5ff;
        color: white;
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt="fayl yuklanmadi"/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
