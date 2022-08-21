import styled from 'styled-components'

export const StyledFacility = styled.section`
  background-color: #EEEEEE;
  padding: 6rem 0;
`

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
`

export const FacilityContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 998px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 3rem;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;

    p {
      font-size: 1.4rem;
    }
  }
`

export const FacilityBox = styled.div`
  text-align: center;

  &:hover {
    img {
      transform: rotateY(180deg);
      line-height: 9.5rem;
    }
  }
`

export const FacilityImg = styled.div`
  position: relative;
  display: inline-block;
  line-height: 9.5rem;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  border: 1.5px solid var(--white);
  z-index: 1;
  margin-bottom: 1.6rem;

  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    border-radius: 50%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0.7rem;
    background-color: #fff;
    z-index: -1;
  }
  img {
    width: 3rem;
    height: 3rem;
    transition: 1s;
    perspective: 4000;
  }

  @media (max-width: 568px) {
    width: 7rem;
    height: 7rem;
    line-height: 8.5rem;
  }
`