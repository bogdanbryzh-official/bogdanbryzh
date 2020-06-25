import React from "react";
import { faAtom, faUsers } from "@fortawesome/free-solid-svg-icons";

import HeaderBlock from "./components/HeaderBlock";
import SlideBlock from "./components/SlideBlock";
import FooterBlock from './components/FooterBlock'

import background1 from "./img/background1.jpg";
import background2 from "./img/background2.jpg";

const links = [
  { anchor: "", text: "About" },
];
const slides = [
  {
    title: "Dive into world of programming",
    icon: faAtom,
    spin: true,
    text:
      "Upon diving into the world of computer programming, one of the first of many challenges you will face will be deciding where to start. With something like programming, it’s best to start at the beginning.",
    backgroundImage: background1,
    gradientColor: "434343",
  },
  {
    title: "Choose your future with us!",
    icon: faUsers,
    spin: false,
    text:
      "We all heard this question when we were kids. Back then, we’d say things like – Astronaut! or Dinosaur finder! or Pilot! When we’re that young, we don’t think about any obstacles we might face, such as student loans, the effort it will take, or the kind of money we’ll make. We simply follow our passion and believe nothing will stop us from succeeding.",
    backgroundImage: background2,
    gradientColor: "",
  },
];

const App = () => {
  return (
    <>
      <HeaderBlock links={links} />
      {slides.map((slide, index) => {
        return <SlideBlock slideData={slide} key={index}></SlideBlock>;
      })}
      <FooterBlock />
    </>
  );
};

export default App;
