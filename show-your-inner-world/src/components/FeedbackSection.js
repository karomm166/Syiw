import React from "react";

import feedbackImg from "../img/logo2.png";

export default function FeedbackSection() {
  return (
    <section className="feedback_section">
      <img src={feedbackImg} alt="Gex Logo" className="feedback_img" />
      <div className="feedback_text">
        <p className="feedback_desc">
          Thank you for visiting! We appreciate your time and hope you found what you were looking for. Stay connected and feel free to reach out if you have any questions!
        </p>
        <cite className="feedback_author">Karo Manukyan M.</cite>
        <span className="feedback_sub">(ARMENIAN)</span>
      </div>
    </section>
  );
}

