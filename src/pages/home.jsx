import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to My Website!</h1>
      <p>
        This is the home page of my website. Here you can find a brief
        introduction to what I do, or what this website is about.
      </p>
      <section>
        <h2>Featured Content</h2>
        {/* Add content like images, cards, or links to other pages here */}
      </section>
      <button>Learn More</button>
    </div>
  );
}

export default HomePage;
