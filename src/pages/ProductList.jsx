import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import NewsLetters from "../components/NewsLetters";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 15px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 6px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
  margin-right: 10px;
`;
const Select = styled.select`
  padding: 8px;
  margin: 5px 10px;
`;
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option disabled selected>
              Colors
            </Option>
            <Option>Green</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>White</Option>
            <Option>Yellow</Option>
            <Option>Blue</Option>
            <Option>grey</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetters />
      <Footer />
    </Container>
  );
};

export default ProductList;
