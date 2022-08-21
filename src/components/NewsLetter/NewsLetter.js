import React from 'react';

// Styled Components
import { StyledNewsLetter, Container, NewsLetterContent, NewsLetterData, NewsLetterEmail, NewsLetterLink } from './NewsLetter.styled';

const NewsLetter = () => {
  return (
    <>
      <StyledNewsLetter>
        <Container>
          <NewsLetterContent>
            <NewsLetterData>
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>A short sentence describing what someone will receive by subscribing</p>
            </NewsLetterData>
            <form action="#">
              <NewsLetterEmail type="email" placeholder="Enter your email address.." />
              <NewsLetterLink to='/'>Subscribe</NewsLetterLink>
            </form>
          </NewsLetterContent>
        </Container>
      </StyledNewsLetter>
    </>
  );
};

export default NewsLetter;