import SocialMedia from "../components/SocialMedia";
import ListContainer from "../components/ListContainer";
import Popup from "../components/Popup";
import { useState } from "react";
import type { SocialMediaList, PopupList, ListType } from "../type/type";
import popupData from "../data/popupData.json";
import socailMedialList from "../data/socialMediaList.json";

// type workProps = {
//   name: string;
//   year: number;
// };
// const works: workProps[] = [
//   {
//     name: "Tip Top Technology",
//     year: 2023,
//   },
//   {
//     name: "Michigan Data Science Team",
//     year: 2023,
//   },
//   {
//     name: "Nourishing Hands",
//     year: 2023,
//   },
// ];

// const projects: workProps[] = [
//   {
//     name: "Geogussr Clone",
//     year: 2024,
//   },

//   {
//     name: "CoolPost",
//     year: 2023,
//   },
//   {
//     name: "Club Attendance",
//     year: 2023,
//   },
// ];

// type ListProps = {
//   experiences: {
//     title: string;
//     item: workProps[];
//   };
//   project: {
//     title: string;
//     item: workProps[];
//   };
// };
// const lists: ListProps = {
//   experiences: {
//     title: "Experiences",
//     item: works,
//   },
//   project: {
//     title: "Projects",
//     item: projects,
//   },
// };

function getTitle(lists: PopupList): ["experience", "project"] {
  const item: string[] = Object.keys(lists);
  return item as ["experience", "project"];
}

function App() {
  const popData: PopupList = popupData;
  const socialMediaList: SocialMediaList[] = socailMedialList;

  const [list, setList] = useState<
    PopupList["experience"] | PopupList["project"]
  >(popData.experience);
  const [listType, setListType] = useState<ListType>("experience");
  const [hoverList, setHoverList] = useState<{
    hover: boolean;
    listName: string | null;
    listIndex: number | null;
  }>({ hover: false, listName: null, listIndex: null });
  const [click, setClick] = useState<boolean>(false);

  const handleTitle = (key: "experience" | "project") => {
    setList(popData[key]);
    setListType(key);
  };
  const titleList = getTitle(popData).map((ele) => (
    <li
      onClick={() => handleTitle(ele)}
      className={`${
        listType === ele ? "text-white" : "text-white/70"
      } cursor-pointer`}
      key={ele}
    >
      {/* {ele.toUpperCase()} */ ele.charAt(0).toUpperCase() + ele.slice(1)}
    </li>
  ));

  const nameAndYear = (): { name: string; year: number }[] => {
    const data: { name: string; year: number }[] = [];
    list.forEach((ele) => data.push({ name: ele.name, year: ele.year }));
    return data;
  };

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2 h-screen px-20 py-12 bg-black relative overflow-hidden">
        <Popup
          hover={hoverList.hover}
          name={list[hoverList.listIndex as number]?.name ?? ""}
          title={list[hoverList.listIndex as number]?.title ?? ""}
          link={list[hoverList.listIndex as number]?.link ?? ""}
          desc={list[hoverList.listIndex as number]?.desc ?? ""}
          imgs={list[hoverList.listIndex as number]?.imgs ?? []}
          click={click}
        />
        <div className="font-nerko-one text-7xl col-span-12 sm:col-span-8 text-white/85">
          <h1 className="">
            <p>Michael Chen</p>
            <p className="pl-16">Software Engineer</p>
          </h1>
        </div>
        <div className="col-span-12 sm:col-span-4 max-sm:row-start-3 max-sm:mt-10">
          <SocialMedia socialMedias={socialMediaList} />
        </div>
        <div className="z-10 self-end col-span-12 grid grid-cols-1 sm:grid-cols-2 h-fit  text-white">
          <div className=" min-h-48 relative z-0">
            <ul className="text-xl mb-1 flex gap-3">{titleList}</ul>
            <ListContainer
              list={nameAndYear()}
              setHoverList={setHoverList}
              setClick={setClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
