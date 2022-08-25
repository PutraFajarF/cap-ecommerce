import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { image } from '../../image';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Styled Components
import { CartContainer, CartInfo, CartTotalPrice, CartButton, SectionFeatured, TopContainer } from './CartDetails.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const CartDetail = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.orderProduct);
  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const tax = ((10 / 100) * subTotalPrice).toFixed(2);
  const totalPrice = (subTotalPrice + parseFloat(tax)).toFixed(2);
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
          {data.map((item, i) => (
            <tr key={i}>
              <td>
                <CartInfo>
                  <img src={image[item.image]} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span>Price: Rp. {item.price}</span> <br />
                    <div style={{ fontSize: '12px', color: 'red' }}
                      onClick={() =>
                        dispatch({ type: 'REMOVE_FROM_CART', value: item })
                      }>
                      remove
                    </div>
                  </div>
                </CartInfo>
              </td>
              <td>
                <input 
                  type="number" 
                  min={1}
                  defaultValue={item.quantity}
                  onChange={e =>
                    dispatch({
                      type: 'CHANGE_QUANTITY_ITEM',
                      value: e.target.value,
                      id: item.id
                    })
                  }
                />
              </td>
              <td>Rp. {item.price * item.quantity}</td>
            </tr>
          ))}
        </table>
        <CartTotalPrice>
          <table>
            <tr>
              <td>Subtotal</td>
              <td>Rp. {subTotalPrice}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>Rp. {tax}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rp. {totalPrice}</td>
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