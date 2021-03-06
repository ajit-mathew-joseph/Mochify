import React from "react";
import "./LandingPage.scss";
import ProductCard from "../../Components/ProductCard/ProductCard";
import jewelryImage from "../../Assets/Banners/jewelry.jpg";
import sortImage from "../../Assets/Banners/sortStyle2.png";
import mugImage from "../../Assets/Banners/mug.jpg";

const LandingPage = (props) => {
  return (
    <div className="landingPage">
      <div className="landingPage__hero">
        <button className="landingPage__hero--button">Shop Now</button>
      </div>
      <div className="landingPage__divider"></div>
      <p className="landingPage__divider--text">Featured</p>
      <div className="landingPage__featured-products">
        {props.featured ? (
          props.featured.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.productName}
              price={product.productPrice}
              updateCartHandler={props.updateCartHandler}
              wishListHandler={props.wishListHandler}
              deleteWishItem={props.deleteWishItem}
            />
          ))
        ) : (
          <></>
        )}
      </div>

      <div className="landingPage__discount-banner">
        <button className="landingPage__discount-banner--button">
          Shop Now
        </button>
      </div>

      <div className="landingPage__promo-container">
        <div className="landingPage__promo-container--subContainer">
          <img
            className="landingPage__promo-container--image"
            src={jewelryImage}
          />
          <button className="landingPage__promo-container--button">
            Shop Now
          </button>
        </div>

        <div className="landingPage__promo-container--subContainer">
          <img className="landingPage__promo-container--image" src={mugImage} />
          <button className="landingPage__promo-container--button">
            Shop Now
          </button>
        </div>

        <div className="landingPage__promo-container--subContainer">
          <img
            className="landingPage__promo-container--image"
            src={sortImage}
          />
          <button className="landingPage__promo-container--button">
            Shop Now
          </button>
        </div>

        <div className="landingPage__promo-container--subContainer">
          <img
            className="landingPage__promo-container--image"
            src={jewelryImage}
          />
          <button className="landingPage__promo-container--button">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
