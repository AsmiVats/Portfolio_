import { NextPage } from "next";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";

export type ProjectCardProps = {
  className?: string;
  title: string;
  description: string;
  points: { text: string }[]; // Simplified: removed `iconSrc` since we're using SiTicktick
  imageSrc: string;
  buttonLabel: string;
  link: string; // Changed to string for URL usage
};

const ProjectCard: NextPage<ProjectCardProps> = ({
  className = "",
  title,
  description,
  points,
  imageSrc,
  buttonLabel,
  link,
}) => {
  return (
    <div
      className={`w-[986px] max-w-full flex flex-row items-start justify-start leading-[normal] tracking-[normal] ${className}`}
    >
      <section className="flex-1 rounded-3xl bg-whitesmoke overflow-hidden flex flex-col items-start justify-start pt-[53.6px] px-[54px] pb-[54.4px] box-border gap-[15.6px] max-w-full text-left text-[30px] text-gray-100 font-degular-display mq700:py-[35px] mq700:px-[27px] mq700:box-border">
        {/* Title */}
        <div className="w-[371.1px] relative tracking-[-0.72px] leading-[43.2px] flex items-center max-w-full mq450:text-[18px] mq450:leading-[26px] mq925:text-[24px] mq925:leading-[35px]">
          {title}
        </div>

        <div className="self-stretch flex flex-col items-start justify-start gap-[3.8px] max-w-full text-[14.7px] text-gray-200 font-manrope">
          <div className="relative leading-[18.7px] w-3/6 max-w-full">
            {description}
          </div>

          <div className="self-stretch flex flex-col items-start justify-start gap-[53.6px] max-w-full text-mini-5 mq450:gap-[27px]">
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq925:flex-wrap">
              <div className="flex flex-col mt-6 items-start justify-start gap-[21.5px] max-w-full mq700:min-w-full mq925:flex-1">
                {points.map((point, index) => (
                  <div
                    key={index}
                    className="rounded-17xl bg-linen overflow-hidden flex flex-row items-center justify-start pt-[9.8px] px-2.5 pb-[2.8px] gap-[8px]"
                  >
                    <Image
                      className="h-[20.4px] w-[20.4px] relative"
                      loading="lazy"
                      width={20}
                      height={20}
                      alt=""
                      src="/svg.svg"
                    />
                    <div className="relative leading-[27px] text-gray-600">{point.text}</div>
                  </div>
                ))}
              </div>

              <Image
                className="w-[397.8px] relative rounded-2xl max-h-full overflow-hidden shrink-0 object-cover max-w-full mq925:flex-1"
                loading="lazy"
                width={398}
                height={224}
                alt={`${title} preview`}
                src={imageSrc}
              />
            </div>

            <div className="flex flex-row items-start justify-start gap-[8.1px] text-[14.8px] text-gray-300">
              <a
                href={link}
                className="relative leading-[27px] inline-block min-w-[91px] cursor-pointer font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonLabel}
              </a>
              <Image
                className="h-[20.4px] w-[20.4px] relative"
                loading="lazy"
                width={20}
                height={20}
                alt="Arrow icon"
                src="/svg-3.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
