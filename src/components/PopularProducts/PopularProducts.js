import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

// Styled Components
import { Section, NewArrivalTitle, NewArrivalH1, ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const PopularProducts = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <NewArrivalTitle>
          <NewArrivalH1>Best Seller Products</NewArrivalH1>
          <p>All the best seller product from designer of our store</p>
        </NewArrivalTitle>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/7')}>
              <Link to="/product/7">
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/7">Blue Water T-Shirt</ProductInfoLink>
              <h4>Rp. 95.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/product/7' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/4')}>
              <Link to="/product/4">
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/4">Champione Grey Jacket</ProductInfoLink>
              <h4>Rp. 180.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/product/4' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/8')}>
              <Link to="/product/8">
                <ProductThumbImg src={require("../../assets/images/product-9.jpg")} alt="" />
              </Link>
              <span>40%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/8">Dark Blue Shoes By Hardrock</ProductInfoLink>
              <h4>Rp. 350.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/product/8' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/6')}>
              <Link to="/product/6">
              <ProductThumbImg src={require("../../assets/images/product-6.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/6">Green Army T-Shirt</ProductInfoLink>
              <h4>Rp. 90.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/product/6' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
        </ProductCenter>
      </Section>
    </>
  );
};

export default PopularProducts;