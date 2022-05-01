import React, { useState } from "react";

const FORM_ENDPOINT = "";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="contact-soon">
        <h1 className="section-title">צור קשר</h1>
        <h4>
          Thank you!
          <br />
          We'll be in touch soon.
        </h4>
      </div>
    );
  }

  return (
    <main className="contact-div">
      <h1 className="section-title">צור קשר</h1>

      <form
        className="setup-form"
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <div className="form-control">
          <label htmlFor="name">שם מלא</label>

          <input
            size="40"
            type="text"
            placeholder="Your name"
            name="name"
            id="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">מייל</label>

          <input
            size="40"
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            className="form-input"
            required
          />
        </div>
        <br />
        <div className="form-control">
          <label htmlFor="message">הודעה</label>

          <textarea
            placeholder=""
            name="message"
            id="message"
            className="form-input"
            required
          />
        </div>
        <br />
        <div>
          <button className="btn" type="submit">
            שלח הודעה
          </button>
        </div>
      </form>

      <div
        data-id="358e84a8"
        data-element_type="widget"
        data-widget_type="google_maps.default"
      >
        <div class="elementor-widget-container">
          <div class="elementor-custom-embed">
            <iframe
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.6224275842937!2d34.843092015486384!3d32.16048642247086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d481206422fe7%3A0x166240c30da43737!2sBen%20Yehuda%20St%2039%2C%20Hertsliya!5e0!3m2!1sen!2sil!4v1643478873505!5m2!1sen!2sil"
              title="הרצליה"
              aria-label="הרצליה"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
