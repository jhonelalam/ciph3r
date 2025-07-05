import React, { useState, useEffect } from "react";

const Footer: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 z-[9999] p-3 bg-green-600 text-white transition-all duration-300 hover:bg-green-700 focus:ring-4 focus:ring-green-300 rounded-[9px] ${
          showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Footer Content */}
      <footer className="bg-white py-4 dark:bg-black">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
        © {new Date().getFullYear()} All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 justify-center">
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;