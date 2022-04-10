import React from "react";
import "./AboutPage.scss";
import ThankYou from "../../Assets/Images/AboutPage/Thanks.jpg"

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <h2 className="about__hero--title">About Mochify</h2>
      </div>

      <main className="about__content">
        <div className="about__about-me">
          <p className="about__about-me--paragraph">
            Hi! My name is Georgia, I am 24 years old, and I am a lifelong gamer
            and artist. I particularly enjoy designing and creating cute
            products like stickers and wallets. At the start of the pandemic, I
            set up an Etsy store, kickstarting my entrepreneurship journey.
          </p>
        </div>

        <div className="about__quality-products">
          <div className="about__quality-products--hero">
            <h3 className="about__quality-products--title">
              Quality Products, Made with Love
            </h3>
          </div>
          <p className="about__quality-products--paragraph">
            As I continued to grow my Etsy store, I was also inspired to
            consider creating and designing a broader range of products to serve
            my growing customer base.
          </p>

          <p className="about__quality-products--paragraph">
            To that end, I set up Mochify, my attempt at continuing to serve my
            loyal customers with cute products but also offering products like
            accessories to enhance their experience.
          </p>

          <p className="about__quality-products--paragraph">
            I work to make sure that each product I list is of the highest
            quality and is made with love and care.
          </p>
        </div>

        <div className="about__social-impact">
          <div className="about__social-impact--hero">
            <h3 className="about__social-impact--title">
              Caring for you, <br></br>Caring for the planet
            </h3>
          </div>
          <p className="about__social-impact--paragraph">
            I am a mother to 3 cats: Cleo, Luna, and Sprinkles. Animal care advocacy is super important to me 
            and by supporting my store, you are making sure that animals everywhere get the care and support they need.
          </p>

          <p className="about__quality-products--paragraph">
            10% of Mochify's gross sales go to the World Wildlife Federation and the American Society for the Prevention of Cruelty to Animals (ASPCA),
            ensuring that both wild animals and abandoned animal causes are well supported.
          </p>
        </div>

        <div className="about__thank-you">
          <img className="about__thank-you--image" src={ThankYou} />
          <h3 className="about__thank-you--text">Thank you for supporting my store!</h3>
          <h3 className="about__thank-you--text">It is you that lets independent artists 
          like me keep doing what I love ♥ </h3>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
