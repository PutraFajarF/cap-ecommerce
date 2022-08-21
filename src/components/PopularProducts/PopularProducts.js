import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// Styled Components
import { Section, NewArrivalTitle, NewArrivalH1, ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const PopularProducts = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <Section>
        <NewArrivalTitle>
          <NewArrivalH1>Best Seller Products</NewArrivalH1>
          <p>All the best seller product from designer of our store</p>
        </NewArrivalTitle>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/1">Quis Nostrud Exercitation</ProductInfoLink>
              <h4>200.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/1">Sonata White Men’s Shirt</ProductInfoLink>
              <h4>140.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1" class="product-thumb">
                <ProductThumbImg src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
              <span>40%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/1">Concepts Solid Pink Men’s Polo</ProductInfoLink>
              <h4>150.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1" class="product-thumb">
              <ProductThumbImg src={require("../../assets/images/product-6.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/1">Edor do eiusmod tempor</ProductInfoLink>
              <h4>$140.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
        </ProductCenter>
      </Section>
    </>
  );
};

export default PopularProducts;