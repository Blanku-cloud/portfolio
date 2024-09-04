import SocialMedia from "../components/SocialMedia";
import ListContainer from "../components/ListContainer";
import Popup from "../components/Popup";
import { useEffect, useState } from "react";
import type { SocialMediaList, PopupList, ListType } from "../type/type";
import popupData from "../data/popupData.json";
import socailMedialList from "../data/socialMediaList.json";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const popups = document.querySelectorAll(".popup");
      const isClickInsidePopup = Array.from(popups).some((popup) =>
        popup.contains(target)
      );

      if (!isClickInsidePopup) {
        setClick(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const experiencePopup = popData.experience.map((item, index) => (
    <Popup
      setClick={setClick}
      key={index}
      hover={hoverList.hover}
      hoverName={hoverList.listName}
      name={item.name}
      title={item.title}
      link={item.link}
      desc={item.desc}
      imgs={item.imgs}
      click={click}
    />
  ));
  const projectPopup = popData.project.map((item, index) => (
    <Popup
      setClick={setClick}
      key={index}
      hover={hoverList.hover}
      hoverName={hoverList.listName}
      name={item.name}
      title={item.title}
      link={item.link}
      desc={item.desc}
      imgs={item.imgs}
      click={click}
    />
  ));

  return (
    <>
      <div className="grid grid-cols-12 grid-rows-2 h-screen lg:px-20 px-5 py-12 bg-black relative overflow-hidden z-10 ">
        {experiencePopup}
        {projectPopup}
        <div className="font-nerko-one text-7xl col-span-12 sm:col-span-8 text-white/85">
          <h1 className="lg:text-[5.4vw] text-[8.4vw]">
            <p>Michael Chen</p>
            <p className="pl-16">Software Engineer</p>
          </h1>
        </div>
        <div className="col-span-12 sm:col-span-4 max-sm:row-start-3 max-sm:mt-10">
          <SocialMedia socialMedias={socialMediaList} />
        </div>
        <div className="z-10 self-end col-span-12 grid grid-cols-1 sm:grid-cols-2 h-fit  text-white">
          <div className="min-h-48 relative z-0">
            <ul className="text-xl mb-1 flex gap-3">{titleList}</ul>
            <ListContainer
              hoverList={hoverList}
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
