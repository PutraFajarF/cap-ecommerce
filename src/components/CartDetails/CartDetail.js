import React from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { image } from '../../image';
import { removeProductToCart } from '../../config/Redux/cart-product/action';
import { useSelector, useDispatch } from 'react-redux';

// / API Hooks
import { useAllProducts } from '../../hooks/useAllProducts';

// Styled Components
import Spinner from '../Spinner/Spinner';
import { CartContainer, CartInfo, CartTotalPrice, CartButton, SectionFeatured, TopContainer } from './CartDetails.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';
import { ProductDetailLinkInfo } from '../Product-Details/DetailProduct.styled';

const CartDetail = () => {
  const dataAll = useAllProducts();
  const products = dataAll.apiData;
  const isLoadingAll = dataAll.loading;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productOrder);
  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity * 1000,
    0
  );
  const tax = ((10 / 100) * subTotalPrice).toFixed(2);
  const totalPrice = (subTotalPrice + parseFloat(tax)).toFixed(2);

  const [user] = useAuthState(auth);
  const handleClick = id => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <CartContainer>
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>
                <CartInfo>
                  <img src={image[item.image]} alt={item.name} />
                  <div>
                    <p>{item.name}</p>
                    <span>Rp. {item.price}</span> <br />
                    <Link to="#" onClick={() => dispatch(removeProductToCart(item))}>Delete Item</Link>
                  </div>
                </CartInfo>
              </td>
              <td>
                <input 
                  type="number" 
                  defaultValue={item.quantity} 
                  min={1} 
                  onClick={e => dispatch({
                    type: 'CHANGE_QUANTITY_ITEM',
                    value: e.target.value,
                    id: item.id
                  })}/>
              </td>
              <td>Rp. {item.price * item.quantity * 1000}</td>
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
      {isLoadingAll ? (
        <Spinner />
      ) : (
        <SectionFeatured>
          <TopContainer>
            <h1>Related Products</h1>
            <Link to="/product">View more</Link>
          </TopContainer>
          <ProductCenter>
            {products.map((prod, index) => (
              <ProductItem key={index}>
                <ProductOverlay onClick={() => handleClick(prod.id)}>
                  <Link to={`product/${prod.id}`}>
                    <ProductThumbImg src={image[prod.image]} alt={prod.name} />
                  </Link>
                  {prod.discount && <span>{Math.floor(Math.random() * 55)}%</span>}
                </ProductOverlay>
                <ProductInfo>
                  <span>{prod.category}</span>
                  <ProductDetailLinkInfo onClick={() => handleClick(prod.id)}>{prod.name}</ProductDetailLinkInfo>
                  <h4>Rp. {prod.price}</h4>
                </ProductInfo>
                <ProductIcon>
                  <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
                </ProductIcon>
              </ProductItem>
            ))}
          </ProductCenter>
        </SectionFeatured>
      )}
      {/* <SectionFeatured>
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
      </SectionFeatured> */}
    </>
  );
};

export default CartDetail;