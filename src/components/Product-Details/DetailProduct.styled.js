import styled from "styled-components";

export const StyledProductDetail = styled.section`
  padding: 10rem 0 5rem 0;
  overflow: hidden;

  h3 {
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
`

export const DetailContainer = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 7rem;

  @media (max-width: 996px) {
    gap: 3rem;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

export const DetailLeft = styled.div`
  display: flex;
  flex-direction: column;

  div {
    text-align: center;
    background-color: #f6f2f1;
    margin-bottom: 2rem;
    height: 45rem;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 996px) {
    width: 30rem;
    height: 45rem;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 45rem;
  }
`

export const DetailRight = styled.div`
  span {
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 600;
    font-size: 2rem;
    color: #54BAB9;
    margin-bottom: 2rem;
  }

  div {
    display: inline-block;
    position: relative;
    z-index: -1;
  }

  select {
    font-family: 'Poppins', sans-serif;
    width: 20rem;
    padding: 0.7rem;
    border: 1px solid #ccc;
    appearance: none;
    outline: none;
  }

  form {
    margin-bottom: 2rem;
    z-index: 0;

    span {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      font-size: 2rem;
      z-index: 0;
    }
  }

  @media (max-width: 650px) {
    margin-top: 1rem;
  }
`

export const DetailRightForm = styled.form`
  margin-bottom: 3rem;

  input {
    padding: 0.8rem;
    text-align: center;
    width: 6rem;
    margin-right: 2rem;
  }

  a {
    background: #54BAB9;
    padding: 0.8rem 4rem;
    color: #fff;
    border-radius: 3rem;
    box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  }

  a:hover {
    background: #EEEEEE;
    color: #54BAB9;
    transform: scale(1.2);
    transition: .5s ease-in-out;
  }

  a:active {
    transform: translate(5px, 10%);
  }
`

export const SectionFeatured = styled.section`
  padding: 10rem 0 5rem 0;
  overflow: hidden;
`

export const TopContainer = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`

export const ProductDetailLinkInfo = styled.div`
  font-size: 1.5rem;
  display: block;
  margin-bottom: 1rem;
  transition: all 300ms ease;
  cursor: pointer;

  &:hover {
    color: #54BAB9;
  }
`

