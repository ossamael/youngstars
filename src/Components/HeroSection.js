import React, { useEffect, useState } from "react";
// import { BsPlayCircle } from "react-icons/bs";
// import banner from "../Assets/banner.png";
import { withTranslation } from "react-i18next";
import SimpleImageSlider from "react-simple-image-slider";
import "../Styles/HeroSection.css"

const images = [
  { url: "/Images/slider_img_0.jpg" },
  {url: "/Images/cover.HEIC" },
];

function HeroSection({ t }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update windowWidth when the window is resized
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // Add an event listener to update windowWidth when the window is resized
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* <p>Window Width: {windowWidth} pixels</p> */}
      <p className="text-[#c13645] text-center font-bold md:font-extrabold text-base sm:text-xl md:text-3xl">
        {t("Text4")}
      </p>
      <div className="image-slider-box">
        <SimpleImageSlider
          width={"100%"}
          height={windowWidth <= 767 ? "100px" : "425px"}
          images={images}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          autoPlayDelay={5}
          slideDuration={1}
        />
      </div>
      {/* <div className="mt-14">
        <p className="text-[#c13645] text-center font-bold md:font-extrabold text-base sm:text-xl md:text-3xl">
          {t("Text4")}
        </p>
        <div className="mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-14 md:ml-14 mt-6 md:mt-10">
          <div className="bg-[#d9d9d9] h-[200px] sm:h-[350px] lg:h-[500px] rounded-2xl flex justify-center items-center">
            <BsPlayCircle className="text-6xl text-[#c13645] " />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default withTranslation()(HeroSection);
