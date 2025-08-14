import React from "react";
import card1 from "../img/foto2.jpg";
import card2 from "../img/foto3.jpg";
import card3 from "../img/foto4.jpg";
import card4 from "../img/foto5.jpg";

export default function InnerWorld() {
  const cards = [
    {
      title: "Show Your Inner World",
      desc: "Open your world and show it so that we want to live in it.",
      img: card1,
    },
    {
      title: "Just Dream",
      desc: "Sometimes all that remains is to dream and simply admire our common World",
      img: card2,
    },
    {
      title: "Just Love",
      desc: "We all strive to get Love.",
      img: card3,
    },
    {
      title: "Don't Think!",
      desc: "Don't think too much just talk, open your soul in my project.",
      img: card4,
    },
  ];

  return (
    <section className="innerWorld_section">
      <div className="container">
        {cards.map((card, index) => (
          <div className="innerWorld_card" key={index}>
            <img src={card.img} alt={card.title} className="innerWorld_img" />
            <h3 className="innerWorld_title">{card.title}</h3>
            <p className="innerWorld_desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


