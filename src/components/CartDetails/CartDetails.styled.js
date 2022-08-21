import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  max-width: 114rem;
  padding: 0 3rem;
  margin: 10rem auto;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
  padding: 0.5rem;
  color: #fff;
  background-color: #54BAB9;
  font-weight: bold;
  }

  td {
    padding: 1rem 0.5rem;
  }

  td input {
    width: 5rem;
    height: 3rem;
    padding: 0.5rem;
  }

  td a {
    color: orangered;
    font-size: 1.4rem;
  }
`

export const CartInfo = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 8rem;
    height: 8rem;
    margin-right: 1rem;
  }

  @media (max-width: 567px) {
    p {
      display: none;
    }
  }
`

export const CartTotalPrice = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: 2rem;

  table {
    border-top: 3px solid #54BAB9;
    width: 100%;
    max-width: 35rem;
  }

  td:last-child {
  text-align: right;
  }

  th:last-child {
    text-align: right;
  }
`

export const CartButton = styled(Link)`
  display: inline-block;
  border-radius: 5rem;
  padding: 1.3rem 5rem;
  font-weight: 600;
  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.3);
  margin-top: 4rem;
  background-color: #54BAB9;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;

  &:hover {
    transform: scale(1.1);
    transition: .5s ease-in-out;
    background-color: #CFD2CF;
    color: #54BAB9;
  }

  &:active {
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