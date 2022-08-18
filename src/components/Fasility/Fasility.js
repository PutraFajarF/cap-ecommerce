import React from 'react';

const Fasility = () => {
  return (
    <>
      <section class="facility__section section" id="facility">
        <div class="container">
          <div class="facility__contianer" data-aos="fade-up" data-aos-duration="1200">
            <div class="facility__box">
              <div class="facility-img__container">
                <svg viewBox='0 0 20 20' className='icon icon-airplane'>
                  <use xlinkHref="../../assets/images/sprite.svg#icon-airplane"></use>
                </svg>
              </div>
              <p>FREE SHIPPING WORLD WIDE</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="../../assets/images/sprite.svg#icon-credit-card-alt"></use>
                </svg>
              </div>
              <p>100% MONEY BACK GUARANTEE</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="/#./images/sprite.svg#icon-credit-card"></use>
                </svg>
              </div>
              <p>MANY PAYMENT GATWAYS</p>
            </div>
            <div class="facility__box">
              <div class="facility-img__container">
                <svg>
                  <use xmlnsXlink="/#./images/sprite.svg#icon-headphones"></use>
                </svg>
              </div>
              <p>24/7 ONLINE SUPPORT</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fasility;