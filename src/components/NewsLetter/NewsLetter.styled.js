import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledNewsLetter = styled.section`
  padding: 6rem 0;
  border-top: 1px solid #EEEEEE;
  overflow: hidden;

  @media (max-width: 998px) {
    padding: 6rem 4rem;
  }
`

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
`

export const NewsLetterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 998px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const NewsLetterData = styled.div`
  h3 {
    font-size: 2.4rem;
    ont-weight: inherit;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #222;
  }

  @media (max-width: 998px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 568px) {
    h3 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
`

export const NewsLetterEmail = styled.input`
  font-size: 1.4rem;
  display: inline-block;
  width: 37rem;
  padding: 1.6rem;
  background-color: #EEEEEE;
  border: none;
  text-indent: 1rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 998px) {
    width: 45rem;
  }

  @media (max-width: 768px) {
    width: 45rem;
    display: block;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 568px) {
    width: 23rem;
    font-size: 1.2rem;
  }
`

export const NewsLetterLink = styled(Link)`
  &:link {
  display: inline-block;
  padding: 1.4rem 3rem;
  margin-left: -0.5rem;
  background-color: #222;
  color: #fff;
  transition: 0.3s;
  opacity: 0.9;
  }

  &:visited {
    display: inline-block;
    padding: 1.4rem 3rem;
    margin-left: -0.5rem;
    background-color: #222;
    color: #fff;
    transition: 0.3s;
    opacity: 0.9;
  }

  &:hover {
    background-color: #000;
  }

  @media (max-width: 568px) {
    $:link {
      padding: 1.2rem 2rem;
      margin-left: 0;
    }

    $:visited {
      padding: 1.2rem 2rem;
      margin-left: 0;
    }
  }
`