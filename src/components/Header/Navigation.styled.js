import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavigation = styled.div`
  height: 6rem;
  line-height: 6rem;
`

export const StyledNavCenter = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledNavList = styled.ul`
  display: flex;
  align-items: center;

  ${'' /* @media (max-width: 768px) {
    position: fixed;
    top: 12%;
    left: -35rem;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    background-color: var(--white);
    height: 100%;
    width: 0%;
    max-width: 35rem;
    z-index: 100;
    transition: all 300ms ease-in-out;
  } */}
`

export const StyledNavItem = styled.li`
  margin: 0 0 1rem 1rem;
  width: 100%;
`

export const StyledNavIcon = styled.li`
  display: flex;
  align-items: center;
`

export const StyledLinkIcon = styled(Link)`
  cursor: pointer;
  font-size: 2.5rem;
  padding: 0 1rem;
  color: #555;
  position: relative;
  margin-right: 0.5rem;
`

export const StyledDivIcon = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  padding: 0 1rem;
  color: #555;
  position: relative;
  margin-right: 0.5rem;
`

export const StyledSpanIcon = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 3px;
  right: -3px;
  background-color: #54BAB9;
  color: #fff;
  border-radius: 50%;
  font-size: 1.3rem;
  height: 2rem;
  width: 2rem;
  justify-content: center;
`