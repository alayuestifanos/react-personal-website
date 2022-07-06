import React from "react";
import "./contact-page.css";

const ContactPage = () => {
  return (
    <section class="section single-page">
      <div class="section-title">
        <h1>contact</h1>
        <div class="underline"></div>
      </div>

      <div class="section-center page-info">
        <p>
          If you are looking to get ahold of me, you can send me an email at
          <a href="mailto:email@email.com">@Alayu's Email</a>
        </p>
        <p>
          You can also reach me on Twitter at
          <a href="https://www.twitter.com">@Alayu's Twitter </a>
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
