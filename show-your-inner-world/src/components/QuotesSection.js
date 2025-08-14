import React from "react";

import foto7 from "../img/foto7.jpeg";
import foto8 from "../img/foto8.jpeg";
import foto9 from "../img/foto9.jpg";
import foto10 from "../img/foto10.webp";

const quotes = [
  {
    text: "Short for omelet rice, omurice is cheap gourmet for hungry university students.",
    author: "Walt Whitman",
    img: foto7,
  },
  {
    text: "Turn your wounds into wisdom.",
    author: "Aristotle",
    img: foto8,
  },
  {
    text: "Golden and crispy, tempura are the battered goods of our dreams.",
    author: "Leonardo da Vinci",
    img: foto9,
  },
  {
    text: "Raw seafood defines Japanese cuisine with its refreshingly cold nature.",
    author: "Wolfgang Amadeus Mozart",
    img: foto10,
  },
];

export default function QuotesSection() {
  return (
    <section className="quotes_section">
      <div className="container">
        {quotes.map((quote, index) => (
          <div className="quote_card" key={index}>
            <img src={quote.img} alt={quote.author} className="quote_img" />
            <p className="quote_text">"{quote.text}"</p>
            <p className="quote_author">— {quote.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
