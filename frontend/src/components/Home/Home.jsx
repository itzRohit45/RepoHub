import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./home.css"; // Import the CSS file

const words = ["Code.", "Commit.", "Collaborate."];

const HomePage = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 150; // Typing vs deleting speed

    const typingInterval = setTimeout(() => {
      if (!isDeleting && charIndex < words[wordIndex].length) {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === words[wordIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <FaGithub className="icon" />
          <span>RepoHub</span>
        </div>
        <div className="nav-links">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
          <Link to="/auth" className="nav-link">
            Signin
          </Link>
        </div>
      </nav>

      {/* Main Section */}
      <div className="main-content">
        <div className="text-container">
          <h1 className="headline">
            {text}
            <span className="cursor">|</span> {/* Blinking Cursor */}
          </h1>
        </div>
        <img src="/repohub.webp" alt="Coding" className="main-image" />
      </div>
    </div>
  );
};

export default HomePage;
