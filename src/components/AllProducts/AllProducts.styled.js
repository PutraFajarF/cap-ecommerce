import styled from "styled-components";

export const StyledAllProducts = styled.section`
  padding: 10rem 0 5rem 0;
  overflow: hidden;
  max-width: 120rem;
  margin: 0 auto;
`

export const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  h1 {
    margin-left: 3rem;
  }
`

export const AllProductSelect = styled.select`
  font-family: 'Poppins', sans-serif;
  width: 20rem;
  padding: 1rem;
  border: 1px solid #ccc;
  appearance: none;
  outline: none;

  @media (max-width: 768px) {
    width: 15rem;
  }
`

export const AllProductForm = styled.form`
  position: relative;
  z-index: 1;

  span {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    font-size: 2rem;
    z-index: 0;
  }
`

export const Pagination = styled.section`
  display: flex;
  align-items: center;
  padding: 3rem 0 5rem 0;

  span {
    display: inline-block;
    padding: 1rem 1.5rem;
    border: 1px solid var(--green);
    font-size: 1.8rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  span:hover {
    border: 1px solid var(--green);
    background-color: var(--green);
    color: #fff;
  }
`

export const PaginationContainer = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
`
