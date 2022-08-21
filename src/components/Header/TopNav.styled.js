import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledTopNav = styled.div`
  background-color: #54BAB9;
  font-size: 1.3rem;
  color: #fff;
`

export const StyledTopNavDiv = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`

export const TopNavUl = styled.ul`
  display: flex;
  align-items: center;
`
export const TopNavLink = styled(Link)`
  color: #fff;
  padding: 0 0.5rem;
`