import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        {step === 1 && <input type="text" placeholder="Your Name" required />}
        {step === 2 && <input type="email" placeholder="Your Email" required />}
        {step === 3 && (
          <textarea placeholder="Your Message" required></textarea>
        )}

        <div className="buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Back
            </button>
          )}
          {step < 3 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 3 && <button type="submit">Send Message</button>}
        </div>
      </form>
    </section>
  );
}

export default Contact;
