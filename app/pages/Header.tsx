import Image from 'next/image';
import element1 from '@/app/asserts/header/Frame.png';
import element2 from '@/app/asserts/header/Frame (1).png';
import element3 from '@/app/asserts/header/Frame (2).png';
import element4 from '@/app/asserts/header/Frame (3).png';
import element5 from '@/app/asserts/header/Group.png';
import element6 from '@/app/asserts/header/Group (1).png';

import TextAnimation from "./common/TextAnimation";

function Header() {
  return (
    <div className="bg-[#4c6ee2] h-screen w-full flex flex-col justify-center items-center relative">
      <div className="font-extrabold text-pretty text-center text-[#ffffff] mb-10">
        {/* <img src='/title.svg' alt="Title" /> */}
      </div>
      <div className="text-center">
        <TextAnimation />
        <span className="text-white text-[24px] font-medium font-degular">
          I'm Asmi Vats
          <br />
        </span>
        <span className="text-white text-[24px] font-light font-ivypresto">
          Graphic Designer & Illustrator
        </span>
      </div>

      {/* Positioned elements */}
      <Image src={element1} alt="Element 1" className="absolute top-0 right-0 w-[80px]" />
      <Image src={element6} alt="Element 6" className="absolute top-0 right-0 w-[80px]" style={{ marginTop: '50px' }} />

      <Image src={element2} alt="Element 2" className="absolute bottom-0 left-0 w-[80px]" />
      <Image src={element5} alt="Element 5" className="absolute bottom-0 left-0 w-[80px]" style={{ marginBottom: '50px' }} />

      <Image src={element3} alt="Element 3" className="absolute top-0 right-0 w-[100px]" style={{ right: 0, marginTop: '100px' }} />
      <Image src={element4} alt="Element 4" className="absolute top-0 left-0 w-[100px]" style={{ marginTop: '150px' }} />
    </div>
  );
}

export default Header;
