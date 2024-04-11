import React from "react";

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <h1>About Us</h1>
      <p>
        This is the "About Us" page for your website. Here, you can provide a
        comprehensive overview of your website's purpose, mission, or vision.
        You can also introduce your team, highlight your values, and share your
        story.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          (Describe your website's core objective and what you aim to achieve.)
        </p>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li>Value 1: (Describe a key value)</li>
          <li>Value 2: (Describe another key value)</li>
          <li>Value 3: (Describe another key value, and so on.)</li>
        </ul>
      </section>
      <section>
        <h2>Our Team</h2>
        {/* Add content to introduce your team members here */}
        <p>
          Our team is comprised of passionate and skilled individuals who are
          dedicated to (your website's mission).
        </p>
      </section>
      <section>
        <h2>Contact Us</h2>
        <p>
          Do you have any questions or feedback? Feel free to contact us through
          (your preferred contact channels, e.g., email address, form).
        </p>
      </section>
    </div>
  );
}

export default AboutUsPage;
