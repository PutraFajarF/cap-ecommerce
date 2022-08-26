import React, { useEffect, useState } from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { image } from '../../image';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

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
    quantity: 0
  });

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product])

  const handleClick = id => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    const { id, name, description, image, price, discount, category} = product;
    const { quantity } = detailOrder;
      const data = { id, name, description, image, price, discount, category, quantity };
      if (quantity === 0) {
        swal("Failed add to cart!", "Please fill quantity item before add to cart!", "warning");
      } else {
        dispatch({
          type: 'ADD_TO_CART',
          value: data
        });
        swal("Added to cart!", "One more step to checkout...", "success");
      }
  };

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
              <select>
                <option defaultValue="Select Size" disabled>
                  Select Size
                </option>
                <option value="32">32</option>
                <option value="42">42</option>
                <option value="52">52</option>
                <option value="62">62</option>
              </select>
            </form>
            <DetailRightForm>
              <input type="number" min="0" defaultValue={"0"}
                onChange={e =>
                setDetailOrder({ ...detailOrder, quantity: e.target.value })}
              />
              <Link to={user ? "/cart" : "/login"} onClick={handleAddToCart}>Add To Cart</Link>
            </DetailRightForm>
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