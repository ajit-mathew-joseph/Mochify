import React from "react";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <h2 className="about__hero--title">About Mochify</h2>
      </div>

      <main className="about__content">
        <div className="about__about-me">
          <img /> {/* image tag goes here */}
          <p className="about__about-me--paragraph">
            Hi! My name is Gabbie, I am 27 years old, and I am a lifelong gamer
            and artist. I particularly enjoy designing and creating cute
            products like stickers and wallets. At the start of the pandemic, I
            set up an Etsy store, kickstarting my entrepreneurship journey.
          </p>
          <p className="about__about-me--paragraph">
            As I continued to grow my Etsy store, I was also inspired to consider creating 
            and designing a broader range of products to serve my growing customer base. To that end,
            I set up Mochify, my attempt at continuing to serve my loyal customers with cute products but also
            offering products like accessories to enhance their experience. 
          </p>
        </div>

        <div className="about__social-impact">
          
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
