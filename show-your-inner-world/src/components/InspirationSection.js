import React from "react";
import inspirationImg from "../img/foto12.jpeg";

export default function InspirationSection() {
  return (
    <section className="inspiration_section">
      <div className="container">
        <div className="inspiration_img_wrapper">
          <img src={inspirationImg} alt="Inspiration" className="inspiration_img" />
        </div>
        <div className="inspiration_text">
          <h2 className="inspiration_title">Sometimes words can change our fuc*ing World</h2>
          <p className="inspiration_desc">
          One sentence. One word. That’s all it takes to spark a revolution, heal a heart, or shift a soul. Never underestimate the power of what you say — because sometimes, words don’t just matter — they change the fuc*ing world.
          </p>
        </div>
      </div>
    </section>
  );
}
