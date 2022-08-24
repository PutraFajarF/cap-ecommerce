import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

// Styled Components
import { Section, NewArrivalTitle, NewArrivalH1, ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from './NewArrival.styled';

const NewArrival = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <Section>
        <NewArrivalTitle>
          <NewArrivalH1>NEW ARRIVALS</NewArrivalH1>
          <p>All the latest picked from designer of our store</p>
        </NewArrivalTitle>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/1')}>
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>WOMEN'S CLOTHES</span>
              <ProductInfoLink to="/product/1">Quis Nostrud Exercitation</ProductInfoLink>
              <h4>Rp. 90.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/3')}>
              <Link to="/product/3">
                <ProductThumbImg src={require("../../assets/images/product-3.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>WOMEN'S CLOTHES</span>
              <ProductInfoLink to="/product/3">Purple Hodie</ProductInfoLink>
              <h4>Rp. 275.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/2')}>
              <Link to="/product/2">
                <ProductThumbImg src={require("../../assets/images/product-2.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>ACCESSORIES</span>
              <ProductInfoLink to="/product/2">Red Bag Courage Outdoor</ProductInfoLink>
              <h4>Rp. 225.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/4')}> 
              <Link to="/product/4">
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/4">Grey Man Jacket</ProductInfoLink>
              <h4>Rp. 180.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/5')}>
              <Link to="/product/5">
                <ProductThumbImg src={require("../../assets/images/product-5.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/5">Black Man Jacket</ProductInfoLink>
              <h4>Rp. 200.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
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
              <ProductInfoLink to="/product/6">Green Shirt Men</ProductInfoLink>
              <h4>Rp. 85.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/7')}>
              <Link to="/product/7">
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
              <span>50%</span>
            </ProductOverlay>
            <ProductInfo>
              <span>MEN'S CLOTHES</span>
              <ProductInfoLink to="/product/7">Blue Shirt Men</ProductInfoLink>
              <h4>Rp. 95.000</h4>
            </ProductInfo>
            <ProductIcon>
              <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
            </ProductIcon>
          </ProductItem>
          <ProductItem>
            <ProductOverlay onClick={() => navigate('/product/8')}>
              <Link to="/product/8">
                <ProductThumbImg src={require("../../assets/images/product-9.jpg")} alt="" />
              </Link>
            </ProductOverlay>
            <ProductInfo>
              <span>ACCESSORIES</span>
              <ProductInfoLink to="/product/8">Dark Blue Shoes by Hardrock</ProductInfoLink>
              <h4>350.000</h4>
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

export default NewArrival;