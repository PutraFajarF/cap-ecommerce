import React from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// Styled Components
import { StyledProductDetail, DetailContainer, DetailLeft, DetailRight, DetailRightForm, SectionFeatured, TopContainer } from './DetailProduct.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const DetailProduct = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <StyledProductDetail>
        <DetailContainer>
          <DetailLeft>
            <div>
              <img src={require("../../assets/images/product-5.jpg")} alt="" />
            </div>
          </DetailLeft>
          <DetailRight>
            <span>Home/T-shirt</span>
            <h1>Boy’s T-Shirt By Handsome</h1>
            <h2>185.000</h2>
            <form>
              <div>
                <select>
                  <option value="Select Size" selected disabled>
                    Select Size
                  </option>
                  <option value="1">32</option>
                  <option value="2">42</option>
                  <option value="3">52</option>
                  <option value="4">62</option>
                </select>
                <span><i className="bx bx-chevron-down"></i></span>
              </div>
            </form>
            <DetailRightForm>
              <input type="text" placeholder="1" />
              <Link to={user ? "/cart" : "/login"}>Add To Cart</Link>
            </DetailRightForm>
            <h3>Product Detail</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minima
              delectus nulla voluptates nesciunt quidem laudantium, quisquam
              voluptas facilis dicta in explicabo, laboriosam ipsam suscipit!
            </p>
          </DetailRight>
        </DetailContainer>
      </StyledProductDetail>

      {/* Related Products */}
      <SectionFeatured>
        <TopContainer>
          <h1>Related Products</h1>
          <Link to="/product">View more</Link>
        </TopContainer>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-5.jpg")} alt="" />
              </Link>
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
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-2.jpg")} alt="" />
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
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
              </Link>
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
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
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
        </ProductCenter>
      </SectionFeatured>
    </>
  );
};

export default DetailProduct;