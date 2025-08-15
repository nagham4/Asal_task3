import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section id="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonial">
        <p>"Great work and very professional!"</p>
        <h4>- Sarah A.</h4>
      </div>
      <div className="testimonial">
        <p>"Delivered my project on time with excellent quality."</p>
        <h4>- John D.</h4>
      </div>
    </section>
  );
}

export default Testimonials;
