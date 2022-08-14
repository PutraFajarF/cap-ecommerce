import React from 'react';

const CategoriesSection = () => {
  return (
    <>
      <section class="section category">
        <div class="cat-center">
          <div class="cat">
            <img src={require("../../assets/images/cat3.jpg")} alt="" />
            <div>
              <p>WOMEN'S WEAR</p>
            </div>
          </div>
          <div class="cat">
            <img src={require("../../assets/images/cat2.jpg")} alt="" />
            <div>
              <p>ACCESSORIES</p>
            </div>
          </div>
          <div class="cat">
            <img src={require("../../assets/images/cat1.jpg")} alt="" />
            <div>
              <p>MEN'S WEAR</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesSection;