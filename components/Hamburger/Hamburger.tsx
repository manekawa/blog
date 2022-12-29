import React, { useState } from "react";

const Hamburger: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Only show the hamburger button on mobile displays */}
      <button
        className="hamburger-button"
        onClick={toggleMenu}
        style={{ display: "none" }}
        media="(max-width: 768px)"
      >
        ☰
      </button>
      <div
        className="social-links-menu"
        style={{
          right: isMenuOpen ? "0" : "-100%",
          transition: "right 0.3s ease-in-out",
        }}
      >
        {/* Add your social links here */}
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </>
  );
};

export default Hamburger;
