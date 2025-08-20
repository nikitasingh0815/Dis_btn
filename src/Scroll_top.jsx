import React, { useState, useEffect } from "react";
import { GoTriangleUp } from "react-icons/go";

const ScrollToTop = () => {
  const [showScrollTopButton, setScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollTopButton(true);
      } else {
        setScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <GoTriangleUp className="top-btn" onClick={scrollTop} />
      )}
    </div>
  );
};

export default ScrollToTop;
