import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// Styled Components
import { CartContainer, CartInfo, CartTotalPrice, CartButton, SectionFeatured, TopContainer } from './CartDetails.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const CartDetail = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <CartContainer>
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>
              <CartInfo>
                <img src={require("../../assets/images/product-2.jpg")} alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: 100.000</span> <br />
                  <Link to="/#">remove</Link>
                </div>
              </CartInfo>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>100.000</td>
          </tr>
          <tr>
            <td>
              <CartInfo>
                <img src={require("../../assets/images/product-3.jpg")} alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: 150.000</span> <br />
                  <Link to="/#">remove</Link>
                </div>
              </CartInfo>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>150.000</td>
          </tr>
          <tr>
            <td>
              <CartInfo>
                <img src={require("../../assets/images/product-4.jpg")} alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: 50.000</span> <br />
                  <Link to="/#">remove</Link>
                </div>
              </CartInfo>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>50.000</td>
          </tr>
          <tr>
            <td>
              <CartInfo>
                <img src={require("../../assets/images/product-5.jpg")} alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: 100.000</span> <br />
                  <Link to="/#">remove</Link>
                </div>
              </CartInfo>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>100.000</td>
          </tr>
          <tr>
            <td>
              <CartInfo>
                <img src={require("../../assets/images/product-6.jpg")} alt="" />
                <div>
                  <p>Boy’s T-Shirt</p>
                  <span>Price: 150.000</span> <br />
                  <Link to="/#">remove</Link>
                </div>
              </CartInfo>
            </td>
            <td><input type="number" value="1" min="1" /></td>
            <td>150.000</td>
          </tr>
        </table>
        <CartTotalPrice>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>550.000</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>50.000</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>600.000</td>
            </tr>
          </table>
          <CartButton to="/#">Proceed To Checkout</CartButton>
        </CartTotalPrice>
      </CartContainer>

      {/* Latest Products */}
      <SectionFeatured>
        <TopContainer>
          <h1>Latest Products</h1>
          <Link to="/product">View more</Link>
        </TopContainer>
        <ProductCenter>
          <ProductItem>
            <ProductOverlay>
              <Link to="/product/1">
                <ProductThumbImg src={require("../../assets/images/product-6.jpg")} alt="" />
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
                <ProductThumbImg src={require("../../assets/images/product-1.jpg")} alt="" />
              </Link>
              <span className="discount">40%</span>
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
                <ProductThumbImg src={require("../../assets/images/product-3.jpg")} alt="" />
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

export default CartDetail;