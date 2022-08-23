import React, { useState ,useEffect} from 'react';
import { auth } from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

// Hooks
import { useProducts, useDetailProducts } from '../../hooks/useProduct';

// Styled Components
import { StyledProductDetail, DetailContainer, DetailLeft, DetailRight, DetailRightForm, SectionFeatured, TopContainer } from './DetailProduct.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const DetailProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [changeProduct, setChangeProduct] = useState(false);
  const [isLoading, dataDetail, getProductDetail] = useDetailProducts();
  console.log(dataDetail);
  const [isLoadingProduct, data, getAllProduct] = useProducts();
  const [user] = useAuthState(auth)

  useEffect(() => {
    if (dataDetail.length < 1 || changeProduct) {
      getProductDetail(productId);
      setChangeProduct(false);
    }
  }, [changeProduct, dataDetail, getProductDetail, productId]);

  useEffect(() => {
    if (data.length < 1 || changeProduct) {
      getAllProduct(Math.random() * 2, 4, '', '');
    }
  }, [changeProduct, data.length, getAllProduct]);

  const handleClick = id => {
    setChangeProduct(true);
    navigate(`/product/${id}`);
  };

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
    <>
      <StyledProductDetail>
        <DetailContainer>
          <DetailLeft>
            <div>
              <img src={dataDetail?.image} alt="" width='100%' id='ProductImg'/>
            </div>
          </DetailLeft>
          <DetailRight>
            <span>Home/T-shirt</span>
            <h1>{dataDetail?.name}</h1>
            <h2>{dataDetail?.price}</h2>
            <form>
              <div>
                <select onChange={e => console.log(e.target.value)}>
                  <option defaultValue="Select Size" selected disabled>
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
              {dataDetail?.description}
            </p>
          </DetailRight>
        </DetailContainer>
      </StyledProductDetail>

      {/* Related Products */}
      {isLoadingProduct ? (
        <></>
      ) : (
        <SectionFeatured>
          <TopContainer>
            <h1>Related Products</h1>
            <Link to="/product">View more</Link>
          </TopContainer>
          <ProductCenter>
            {data?.map(product => (
              <ProductItem>
                <ProductOverlay>
                  <div onClick={() => handleClick(product.id)}>
                    <ProductThumbImg src={product.image} alt={product.name} />
                  </div>
                </ProductOverlay>
                <ProductInfo>
                  <span>{product.category}</span>
                  <div onClick={() => handleClick(product.id)}>{product.name}</div>
                  <h4>{product.price}</h4>
                </ProductInfo>
                <ProductIcon>
                  <ProductToCartLink to={user ? '/cart' : '/login'}><i className="bx bx-cart">Add To Cart</i></ProductToCartLink>
                </ProductIcon>
              </ProductItem>
            ))}
            {/* <ProductItem>
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
            </ProductItem> */}
          </ProductCenter>
        </SectionFeatured>
      )}
    </>
  );
};

export default DetailProduct;