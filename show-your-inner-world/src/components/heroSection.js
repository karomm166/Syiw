import React from "react";

import foto1 from "../img/foto1.jpg";

export default function HeroSection() {
  return (
    <section
      className="welcome"
      style={{ backgroundImage: `url(${foto1})` }}
    >
      <div className="welcome_text">
        <h4 className="welcome_subtitle">Show Your Inner World</h4>
        <h1 className="welcome_title">Promote your world!</h1>
        <p className="welcome_desc">
          This platform is for expressing yourself and sharing your inner world
        </p>
        <a href="#!" className="btn">CLICK ME</a>
      </div>
    </section>
  );
}
