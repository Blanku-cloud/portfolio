import { useState } from "react";

interface ListObj {
  name: string;
  year: number;
}

interface ListContainerProps {
  list: ListObj[];
  setHoverList: React.Dispatch<
    React.SetStateAction<{
      hover: boolean;
      listName: string | null;
      listIndex: number | null;
    }>
  >;
  hoverList: {
    hover: boolean;
    listName: string | null;
    listIndex: number | null;
  };
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ListContainer({
  list,
  setHoverList,
  setClick,
  hoverList,
}: ListContainerProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>();

  const addZero = (num: number): string | number => {
    if (Number(num) < 10) {
      return "0" + num;
    }
    return num;
  };

  const onHover = (index: number, name: string): void => {
    setHoverIndex(index);
    setHoverList({
      hover: true,
      listName: name,
      listIndex: index,
    });
  };
  const offHover = (): void => {
    setHoverIndex(null);
    setHoverList({
      ...hoverList,
      hover: false,
    });
  };
  const onClick = (): void => {
    setClick(true);
  };

  const listItem = list.map((item, index) => (
    <li
      className="flex justify-between text-start cursor-pointer  text-lg lg:my-2 my-4"
      key={index}
      onMouseEnter={() => onHover(index, item.name)}
      onMouseLeave={() => offHover()}
      onClick={() => onClick()}
    >
      <span
        className={`w-10 shrink-0 ease-in duration-200  ${
          hoverIndex !== null && hoverIndex !== index
            ? "text-zinc-600"
            : "text-zinc-500"
        }`}
      >
        {addZero(index + 1)}
      </span>
      <span
        className={`flex-grow ease-in duration-200 ${
          hoverIndex !== null && hoverIndex !== index
            ? "lg:text-white/50 text-white"
            : "text-white"
        }`}
      >
        {item.name}
      </span>
      <span
        className={`w-14 text-end shrink-0 ml-auto ease-in duration-200  ${
          hoverIndex !== null && hoverIndex !== index
            ? "text-zinc-600"
            : "text-zinc-500"
        }`}
      >
        {item.year}
      </span>
    </li>
  ));
  return (
    <ul className="w-full mb-4 max-w-md overflow-auto h-full">{listItem}</ul>
  );
}
