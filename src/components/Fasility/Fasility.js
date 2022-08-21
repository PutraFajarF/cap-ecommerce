import React from 'react';
// Styled Components
import { StyledFacility, Container, FacilityContainer, FacilityBox, FacilityImg } from './Fasility.styled';

const Fasility = () => {
  return (
    <>
      <StyledFacility>
        <Container>
          <FacilityContainer data-aos="fade-up" data-aos-duration="1200">
            <FacilityBox>
              <FacilityImg>
                <img src={require('../../assets/images/airplane.png')} alt='plane'></img>
              </FacilityImg>
              <p>FREE SHIPPING WORLD WIDE</p>
            </FacilityBox>
            <FacilityBox>
              <FacilityImg>
                <img src={require('../../assets/images/save-money.png')} alt='money'></img>
              </FacilityImg>
              <p>100% MONEY BACK GUARANTEE</p>
            </FacilityBox>
            <FacilityBox>
              <FacilityImg>
                <img src={require('../../assets/images/creditcard.png')} alt='credit-card'></img>
              </FacilityImg>
              <p>MANY PAYMENT GATWAYS</p>
            </FacilityBox>
            <FacilityBox>
              <FacilityImg>
                <img src={require('../../assets/images/support.png')} alt='support'></img>
              </FacilityImg>
              <p>24/7 ONLINE SUPPORT</p>
            </FacilityBox>
          </FacilityContainer>
        </Container>
      </StyledFacility>
    </>
  );
};

export default Fasility;