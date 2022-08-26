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
import { StyledAllProducts, TopContainer, AllProductSelect, AllProductForm } from './AllProducts.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const AllProducts = () => {
  const data = useAllProducts();
  const products = data.apiData;
  const isLoading = data.loading;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [dataItem, setDataItem] = useState();
  const filterItem = (cat) => {
    if (cat === "") {
      setDataItem(products)
    } else {
      setDataItem(products.filter(prod => prod.category === cat))
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!isLoading) {
      setDataItem(products)
    }
  }, [isLoading ,products]);

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <StyledAllProducts>
        <TopContainer>
          <h1>All Products</h1>
          <AllProductForm>
            <AllProductSelect onChange={(e) => filterItem(e.target.value)}>
              <option value="">Default Sorting</option>
              <option value="WOMEN'S WEAR">Category WOMEN'S WEAR</option>
              <option value="MEN'S WEAR">Category MEN'S WEAR</option>
              <option value="ACCESSORIES">Category ACCESSORIES</option>
            </AllProductSelect>
            <span><i className="bx bx-chevron-down"></i></span>
          </AllProductForm>
        </TopContainer>
        <ProductCenter>
          {dataItem?.map((product, index) => (
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
                <ProductToCartLink to={user ? `/product/${product.id}` : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
              </ProductIcon>
            </ProductItem>
          ))}
        </ProductCenter>
      </StyledAllProducts>
    </>
  );
};

export default AllProducts;