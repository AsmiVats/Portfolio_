import SoftwareDev from '@/app/asserts/info-svg/SoftwareDeveloper.svg';
import WebD from '@/app/asserts/info-svg/WebDesigner.svg';
import Illust from '@/app/asserts/info-svg/Illustrator.svg';
import MotionGraphic from '@/app/asserts/info-svg/MotionGraphic.svg';
// import Content from '@/app/asserts/Vector.svg';

export default function Info() {
  return (
    <div className="bg-black flex justify-center items-center">
      <SoftwareDev className="w-16 h-16" />
      <WebD className="w-16 h-16" />
      <Illust className="w-16 h-16" />
      <MotionGraphic className="w-16 h-16" />
      {/* <Content className="w-16 h-16" /> */}
    </div>
  );
}