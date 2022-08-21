import React from 'react';

// Styled Components
import { StyledFooter, Container, FooterContainer, FooterCenter } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <Container>
          <FooterContainer>
            <FooterCenter>
              <h3>EXTRAS</h3>
              <a href="/##">Brands</a>
              <a href="/##">Gift Certificates</a>
              <a href="/##">Affiliate</a>
              <a href="/##">Specials</a>
              <a href="/##">Site Map</a>
            </FooterCenter>
            <FooterCenter>
              <h3>INFORMATION</h3>
              <a href="/##">About Us</a>
              <a href="/##">Privacy Policy</a>
              <a href="/##">Terms & Conditions</a>
              <a href="/##">Contact Us</a>
              <a href="/##">Site Map</a>
            </FooterCenter>
            <FooterCenter>
              <h3>MY ACCOUNT</h3>
              <a href="/##">My Account</a>
              <a href="/##">Order History</a>
              <a href="/##">Wish List</a>
              <a href="/##">Newsletter</a>
              <a href="/##">Returns</a>
            </FooterCenter>
            <FooterCenter>
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Jalan kenanga terusan no.88, Pasar Minggu, Jakarta Selatan
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                captoko@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                0251-8331555
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                Jakarta, Indonesia
              </div>
            </FooterCenter>
          </FooterContainer>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;