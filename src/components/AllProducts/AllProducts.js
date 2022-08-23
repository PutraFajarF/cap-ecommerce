import React, { useState, useEffect } from 'react';
import {
  auth
} from '../../config/Firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

// Hooks
import { useProducts } from '../../hooks/useProduct';

// Styled Components
import { StyledAllProducts, TopContainer, AllProductSelect, AllProductForm, Pagination, PaginationContainer } from './AllProducts.styled';
import { ProductCenter, ProductItem, ProductOverlay, ProductThumbImg, ProductInfo, ProductInfoLink, ProductIcon, ProductToCartLink } from '../New-Arrival/NewArrival.styled';

const AllProducts = () => {
  const [sort, setSort] = useState('');
  const [isLoading, data, getAllProduct] = useProducts();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (data.length < 1) {
      getAllProduct(1, 12, '', '');
    }
  }, [data.length, getAllProduct])

  const handleSort = params => {
    setSort(params);
    getAllProduct(1, 12, `${params}`, 'asc');
  };

  return isLoading ? (
    <div style={{ height: '100vh', textAlign: 'center' }}>
      Loading Product...
    </div>
  ) : (
    <>
      <StyledAllProducts>
        <TopContainer>
          <h1>All Products</h1>
          <AllProductForm>
            <AllProductSelect onChange={e => handleSort(e.target.value)} defaultValue={sort}>
              <option value="id">Default Sorting</option>
              <option value="price">Sort By Price</option>
              <option value="3">Sort By Popularity</option>
              <option value="4">Sort By Sale</option>
              <option value="5">Sort By Rating</option>
            </AllProductSelect>
            <span><i className="bx bx-chevron-down"></i></span>
          </AllProductForm>
        </TopContainer>
        <ProductCenter>
          {data?.map((product) => (
            <ProductItem key={product.id}>
              <ProductOverlay>
                <Link to={`/product/${product.id}`}>
                  <ProductThumbImg src={product.image} alt={product.name} />
                </Link>
                {product.discount && <span>40%</span>}
              </ProductOverlay>
              <ProductInfo>
                <span>{product.category}</span>
                <ProductInfoLink to={`/product/${product.id}`}>{product.name}</ProductInfoLink>
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
                <ProductThumbImg src={require("../../assets/images/product-3.jpg")} alt="" />
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
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
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
                <ProductThumbImg src={require("../../assets/images/product-5.jpg")} alt="" />
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
                <ProductThumbImg src={require("../../assets/images/product-7.jpg")} alt="" />
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
                <ProductThumbImg src={require("../../assets/images/product-4.jpg")} alt="" />
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
          </ProductItem> */}
        </ProductCenter>
      </StyledAllProducts>
      <Pagination>
        <PaginationContainer>
          <span>1</span> <span>2</span> <span>3</span> <span>4</span>
          <span><i className="bx bx-right-arrow-alt"></i></span>
        </PaginationContainer>
      </Pagination>
    </>
  );
};

export default AllProducts;