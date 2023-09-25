import React, { useState, useEffect} from "react";

import { withTranslation } from "react-i18next";

function TeacherCard({ data, t }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <div className="h-[300px] lg:h-[500px] border-[20px] border-[#ededed] rounded-3xl flex flex-col justify-around items-center md:justify-center md:items-center mr-4 md:mr-10 w-[100%]">
      <div className="h-[320px] flex justify-center items-center">
        <iframe src={data.video} width={windowWidth <= 767 ? "150" : "200"} height={windowWidth <= 767 ? "150" : "200"} title={data.name} frameborder="0" allow="autoplay; fullscreen" allowfullscreen>          
        </iframe>
      </div>
      <div className="h-[180px] flex flex-col justify-center items-center bg-[#ededed] w-[100%]">
        <p className="font-bold">{t(`${data.name}`)}</p>
        <p className="font-medium">{t(`${data.profession}`)}  </p>
      </div>
    </div>
  );
}

export default withTranslation()(TeacherCard);
