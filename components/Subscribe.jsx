import React from "react";

function Subscribe() {
  return (
    <div className="subscribe">
      <h3 className="subscribe_title">Subscribe to our news letter</h3>
      <p className="subscribe_desc">
        I've been using LegacyLine for several years now, and I couldn't be
        happier with their services. The mobile banking app they provide.
      </p>

      <form action="/" className="subscribe_form">
        <div className="subscribe_form_row">
          <input type="email" placeholder="Enter your  mail..." />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
}

export default Subscribe;
