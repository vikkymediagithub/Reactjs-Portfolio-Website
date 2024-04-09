import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-10 right-10 bg-[#36454F] hover:bg-[#ff014f] font-bold py-2 px-4 rounded-full focus:outline-none transition-all duration-300 ease-in-out`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
