interface PopupProps {
  name: string;
  title: string;
  link: string;
  desc: string;
  imgs: string[];
  hover: boolean;
  click: boolean;
}

export default function Popup({
  name,
  title,
  link,
  desc,
  imgs,
  hover,
  click,
}: PopupProps) {
  const img = imgs.map((link, index) => (
    <img
      key={index}
      className="w-full h-auto object-cover my-10"
      src={link}
      alt="Sample Image"
    />
  ));
  const hoverOrClick = (): string => {
    if (click) {
      return "";
    }
    if (hover) {
      return "translate-y-1/2 rotate-12 pointer-events-none";
    }
    return "translate-y-full";
  };
  return (
    <div
      className={`absolute w-[80rem] overflow-auto inset-y-0 right-0 origin-bottom-left z-30 pt-72 mx-12 sm:rotate-30 transition-transform duration-500 sm:duration-700 ${hoverOrClick()}`}
    >
      <div className="bg-gray-300 w-full rounded-t-2xl min-h-[18rem] pb-11 py-11  px-12">
        <div className="flex w-full flex-grow">
          <div className="flex flex-col w-1/2 gap-4">
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
          <div className="w-1/2 px-4">
            <div>
              <p>{desc}</p>
            </div>
          </div>
        </div>
        <div className="w-full ">{img}</div>
      </div>
    </div>
  );
}
