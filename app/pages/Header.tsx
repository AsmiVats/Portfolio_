// import title from '../assets/title.svg';

import TextAnimation from "./common/TextAnimation";

function Header() {
  return (
    <div className="bg-[#4c6ee2] h-screen w-full flex flex-col justify-center items-center">
      <div className="font-extrabold text-pretty text-center text-[#ffffff] mb-10">
        {/* <img src='/title.svg' alt="Title" /> */}
      </div>
      <div className="text-center">
      <TextAnimation/>
        <span className="text-white text-[24px] font-medium font-degular">
          I'm Asmi Vats
          <br />
        </span>
        <span className="text-white text-[24px] font-light font-ivypresto">
          Graphic Designer & Illustrator
        </span>
        
      </div>
    </div>
  );
}

export default Header;
