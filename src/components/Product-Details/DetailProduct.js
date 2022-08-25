import React, { useEffect, useState } from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { image } from '../../image';
import { useDispatch } from 'react-redux';

// API Hooks
import { useAllProducts } from '../../hooks/useAllProducts';

// Styled Components
import Spinner from '../Spinner/Spinner';
import { StyledProductDetail, DetailContainer, DetailLeft, DetailRight, DetailRightForm, SectionFeatured, TopContainer, ProductDetailLinkInfo } from './DetailProduct.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const DetailProduct = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const data = useAllProducts(id);
  const product = data.apiData;
  const isLoading = data.loading;
  const dataAll = useAllProducts();
  const products = dataAll.apiData;
  const isLoadingAll = dataAll.loading;
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [detailOrder, setDetailOrder] = useState({
    size: '',
    quantity: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  const handleClick = id => {
    navigate(`/product/${id}`);
  };

  const handleCart = () => {
    if (!user) {
      alert('Please login for add to cart')
      navigate('/login')
    } else {
      const { id, name, price, image } = product;
      const { size, quantity } = detailOrder;
      const products = { id, name, price, image, size, quantity};
      if (size === '' || quantity === 0) {
        alert('Please fill all the field!')
      } else {
        dispatch({
          type: 'ADD_TO_CART',
          value: data
        });
        alert('Added to cart')
      }
    }
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <>
      <StyledProductDetail>
        <DetailContainer>
          <DetailLeft>
            <div>
              <img src={image[product.image]} alt={product.name} />
            </div>
          </DetailLeft>
          <DetailRight>
            <span>Home / Product / Product Detail</span>
            <h1>{product.name}</h1>
            <h2>Rp. {product.price}</h2>
            <form>
              {/* <div> */}
                <select 
                  onChange={e => setDetailOrder({ ...detailOrder, size: e.target.value })}
                >
                  <option value="">
                    Select Size
                  </option>
                  <option value="32">32</option>
                  <option value="42">42</option>
                  <option value="52">52</option>
                  <option value="62">62</option>
                </select>
                <span><i className="bx bx-chevron-down"></i></span>
              {/* </div> */}
            </form>
            {/* <DetailRightForm> */}
              <input 
                type="number" 
                min="1"
                defaultValue={0}
                onChange={(e) => setDetailOrder({ ...detailOrder, quantity: e.target.value })}
              />
              <button onClick={handleCart}>Add To Cart</button>
            {/* </DetailRightForm> */}
            <h3>Product Detail</h3>
            <p>
              {product.description}
            </p>
          </DetailRight>
        </DetailContainer>
      </StyledProductDetail>

      {/* Related Products */}
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
    </>
  );
};

export default DetailProduct;