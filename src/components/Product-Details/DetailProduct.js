import React from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { image } from '../../image';

// API Hooks
import { useAllProducts } from '../../hooks/useAllProducts';

// Styled Components
import { StyledProductDetail, DetailContainer, DetailLeft, DetailRight, DetailRightForm, SectionFeatured, TopContainer, ProductDetailLinkInfo } from './DetailProduct.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const DetailProduct = () => {
  const {id} = useParams();
  const data = useAllProducts(id);
  const product = data.apiData;
  const dataAll = useAllProducts();
  const products = dataAll.apiData;
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleClick = id => {
    navigate(`/product/${id}`);
  };
  return (
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
              <div>
                <select>
                  <option defaultValue="Select Size" disabled>
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
              {product.description}
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
          {products.map((prod, index) => (
            <ProductItem key={index}>
              <ProductOverlay>
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
    </>
  );
};

export default DetailProduct;