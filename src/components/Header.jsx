import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

import { brainwaveSymbol } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";

const Header = () => {
  const pathName = useLocation();
  const buttonRef = useRef(null);
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  useEffect(() => {
    gsap.to(".sign-in", {
      x: 5,
      yoyo: true,
      repeat: 10,
      delay: 4,
      duration: 0.1,
      ease: "power1.inOut",
    });
  }, []);

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full lg:bg-n-8/90 lg:backdrop-blur-sm border-b border-n-6  ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img
            className=""
            src={brainwaveSymbol}
            width={50}
            height={40}
            alt="Brainwave"
          />
          <h1 className="absolute z-10 top-7 left-24 text-white text-xl font-bold">
            ArtifyAI
          </h1>
        </a>

        <nav
          className={` ${
            openNavigation ? "flex" : "hidden"
          }    fixed top-[5rem] left-0 right-0 bottom-0  bg-n-8  lg:static 
          lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto lg:flex-row z-2">
            {navigation.map((item) => (
              <a
                onClick={handleClick}
                className={`block relative text-2xl uppercase ${
                  item.onlyMobile ? "lg:hidden" : ""
                }
                   hover:text-color-1 font-code text-n-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  
                   lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                     item.url === pathName.hash
                       ? "z-2 lg:text-n-1"
                       : "text-n-1/50"
                   }`}
                key={item.id}
                href={item.url}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="sign-in hidden lg:flex" href="#login">
          Sign in
          <ButtonGradient />
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
