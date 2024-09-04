import { useEffect, useRef } from "react";

interface PopupProps {
  name: string;
  title: string;
  link: string;
  desc: string;
  imgs: string[];
  hover: boolean;
  click: boolean;
  hoverName: string | null;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Popup({
  name,
  title,
  link,
  desc,
  imgs,
  hover,
  click,
  hoverName,
}: PopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (popupRef.current && !click) {
      // Smoothly scroll the popup container to the top
      popupRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [click]);

  const img = imgs.map((link, index) => (
    <img
      key={index}
      className="w-full h-auto object-cover my-10"
      src={`/./image/${link}`}
      alt={`Sample ${index}`}
    />
  ));

  const hoverOrClick = (): string => {
    if (click && hoverName === name) {
      return "z-30";
    }
    if (hover && hoverName === name) {
      return "translate-y-1/2 rotate-12 z-10";
    }
    return "translate-y-full z-30";
  };
  return (
    <>
      {click && hoverName === name && (
        <div className="w-screen h-screen pointer-events-auto absolute z-20"></div>
      )}
      <div
        ref={popupRef}
        className={`absolute lg:w-[80rem] overflow-auto inset-y-0 right-0 origin-bottom-left pt-72 lg:mx-12 sm:rotate-30 transition-transform duration-500 sm:duration-700  
          ${hoverOrClick()}`}
      >
        <div className="popup bg-gray-300 w-full rounded-t-2xl min-h-full pb-11 py-11  lg:px-12 px-5">
          <div className="flex w-full flex-grow lg:flex-row flex-col">
            <div className="flex flex-col lg:w-1/2 lg:gap-4 gap-2">
              <span>
                <h2 className="text-4xl uppercase">{name}</h2>
                <span className="underline text-black/70 text-lg">
                  <a target="_blank" rel="noopener noreferrer" href={link}>
                    {link}
                  </a>
                </span>
              </span>
              <span>{title}</span>
            </div>
            <div className="lg:w-1/2 lg:px-4 pt-10">
              <div>
                <p>{desc}</p>
              </div>
            </div>
          </div>
          <div className="w-full">{img}</div>
        </div>
      </div>
    </>
  );
}
