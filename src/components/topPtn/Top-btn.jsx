import React from 'react'
import { useState, useEffect } from "react";

import "./topPtn.css";

export default function TopPtn() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down by a certain amount
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="top-button">
          <i className="fa fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

