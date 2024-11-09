import React from 'react';

function Header() {
  return (
    <div className="bg-[#4c6ee2] h-screen w-full flex flex-col justify-center items-center">
      <div className="font-extrabold text-pretty text-center text-[#ffffff] text-9xl mb-10">
        Hello!
      </div>
      <div className="text-center mt-10">
        <span className="text-white text-4xl font-medium font-degular">
          I'm Asmi Vats
          <br />
        </span>
        <span className="text-white text-4xl font-light font-ivypresto">
          Graphic Designer & Illustrator
        </span>
      </div>
    </div>
  );
}

export default Header;
