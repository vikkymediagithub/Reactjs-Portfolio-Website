import React from 'react'


const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-[#212428] flex items-center justify-center">
      <div className="w-8 h-8 border-t-2 border-r-2 border-[#ff014f] rounded-full animate-spin">
      <span className="sr-only">loading</span>
      </div>
    </div>
  );
}

export default Preloader;