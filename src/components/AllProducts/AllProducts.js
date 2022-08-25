import React, { useEffect, useState } from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { image } from '../../image';

// API Hooks
import { useAllProducts } from '../../hooks/useAllProducts';

// Styled Components
import Spinner from '../Spinner/Spinner';
import { StyledAllProducts, TopContainer, AllProductSelect, AllProductForm, Pagination, PaginationContainer } from './AllProducts.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const AllProducts = () => {
  const [sort, setSort] = useState('');
  const [products, isLoading, getAllProduct] = useAllProducts();
  // const data = useAllProducts();
  // const products = data.apiData;
  // const isLoading = data.loading;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [products]);

  useEffect(() => {
    if (products.length < 1) {
      getAllProduct(1, 8, '', '');
    }
  }, [products.length, getAllProduct]);

  const handleSort = params => {
    setSort(params);
    getAllProduct(1, 8, `${params}`, 'asc');
  };

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <StyledAllProducts>
        <TopContainer>
          <h1>All Products</h1>
          <AllProductForm onChange={e => handleSort(e.target.value)}
              defaultValue={sort}>
            <AllProductSelect
              onChange={e => handleSort(e.target.value)}
              defaultValue={sort}
            >
              <option value='id'>Default Sorting</option>
              <option value='price'>Sort By Price</option>
            </AllProductSelect>
            <span><i className="bx bx-chevron-down"></i></span>
          </AllProductForm>
        </TopContainer>
        <ProductCenter>
          {products.map((product, index) => (
            <ProductItem key={index}>
              <ProductOverlay onClick={() => navigate(`/product/${product.id}`)}>
                <Link to={`product/${product.id}`}>
                  <ProductThumbImg src={image[product.image]} alt={product.name} />
                </Link>
                {product.discount && <span>{Math.floor(Math.random() * 55)}%</span>}
              </ProductOverlay>
              <ProductInfo>
                <span>{product.category}</span>
                <ProductInfoLink to={`${product.id}`}>{product.name}</ProductInfoLink>
                <h4>Rp. {product.price}</h4>
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