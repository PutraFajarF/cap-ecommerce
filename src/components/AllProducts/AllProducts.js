import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// API Hooks
import { useAllProducts } from '../../hooks/useAllProducts';

// Styled Components
import { StyledAllProducts, TopContainer, AllProductSelect, AllProductForm, Pagination, PaginationContainer } from './AllProducts.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const AllProducts = () => {
  const data = useAllProducts();
  const products = data.apiData
  const [user] = useAuthState(auth);
  return (
    <>
      <StyledAllProducts>
        <TopContainer>
          <h1>All Products</h1>
          <AllProductForm>
            <AllProductSelect>
              <option value="1">Default Sorting</option>
              <option value="2">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </AllProductSelect>
            <span><i className="bx bx-chevron-down"></i></span>
          </AllProductForm>
        </TopContainer>
        <ProductCenter>
          {products.map((product, index) => (
            <ProductItem key={index}>
              <ProductOverlay>
                <Link to={`product/${product.id}`}>
                  <ProductThumbImg src={product.image} alt={product.name} />
                </Link>
                {product.discount && <span>40%</span>}
              </ProductOverlay>
              <ProductInfo>
                <span>{product.category}</span>
                <ProductInfoLink to={`${product.id}`}>{product.name}</ProductInfoLink>
                <h4>$ {product.price}</h4>
              </ProductInfo>
              <ProductIcon>
                <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
              </ProductIcon>
            </ProductItem>
          ))}
        </ProductCenter>
      </StyledAllProducts>
      <Pagination>
        <PaginationContainer>
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span><i className="bx bx-right-arrow-alt"></i></span>
        </PaginationContainer>
      </Pagination>
    </>
  );
};

export default AllProducts;