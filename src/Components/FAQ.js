import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { withTranslation } from "react-i18next";
// import "./style.css"

const FAQ = ({ t }) => {
  const [isCollapsed1, setCollapsed1] = useState(true);
  const [isCollapsed2, setCollapsed2] = useState(true);
  const [isCollapsed3, setCollapsed3] = useState(true);
  const [isCollapsed4, setCollapsed4] = useState(true);
  const [isCollapsed5, setCollapsed5] = useState(true);

  const toggleCollapse1 = () => {
    setCollapsed1(!isCollapsed1);
  };

  const toggleCollapse2 = () => {
    setCollapsed2(!isCollapsed2);
  };

  const toggleCollapse3 = () => {
    setCollapsed3(!isCollapsed3);
  };

  const toggleCollapse4 = () => {
    setCollapsed4(!isCollapsed4);
  };

  const toggleCollapse5 = () => {
    setCollapsed5(!isCollapsed5);
  };



  const faq_order_className = `font-bold faq-question ${t('faq_heading.alignmentClass')}`
  const order_management = `${t('faq_order_manage')}`
  
  const title_justify = `text-[#c13645] max-sm:text-base text-2xl md:text-4xl font-bold mb-14 flex ${t('title_justify')}`
  return (
    <div className="mb-20 mr-4 ml-4 sm:mr-8 sm:ml-8 md:mr-32 md:ml-32 mt-6 md:mt-10" id="faq" >
      <p className={title_justify}>
        {t("Asked Question")}
      </p>
      <div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            onClick={toggleCollapse1}
            className={`${
              isCollapsed1
                ? "flex justify-between cursor-pointer text-black "
                : ""
            }  flex justify-between cursor-pointer text-[#c13645]  `}
          >
            <div className={faq_order_className}>
              {t("faq_heading.Raw denim")}
            </div>
            <div className={order_management}>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed1 ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
            {t("Anim pariatur")}
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            onClick={toggleCollapse2}
            className={`${
              isCollapsed2
                ? "flex justify-between cursor-pointer text-black"
                : ""
            }  flex justify-between cursor-pointer text-[#c13645]`}
          >
            <div className={faq_order_className}>
            {t("faq_heading.question 2")}
            </div>
            <div className={order_management}>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed2 ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
           {t("question 2 content")}
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            onClick={toggleCollapse3}
            className={`${
              isCollapsed3
                ? "flex justify-between cursor-pointer text-black"
                : ""
            }  flex justify-between cursor-pointer text-[#c13645]`}
          >
            <div className={faq_order_className}>
            {t("faq_heading.Raw denim")}
            </div>
            <div className={order_management}>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed3 ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
           {t("Anim pariatur")}
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            onClick={toggleCollapse4}
            className={`${
              isCollapsed4
                ? "flex justify-between cursor-pointer text-black"
                : ""
            }  flex justify-between cursor-pointer text-[#c13645]`}
          >
            <div  className={faq_order_className}>
            {t("faq_heading.Raw denim")}
            </div>
            <div className={order_management}>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed4 ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
     {t("Anim pariatur")}
          </div>
        </div>
        <div className="border-b-2 border-r-2 border-l-2 border-[#d9d9d9] flex flex-col justify-between p-4">
          <div
            onClick={toggleCollapse5}
            className={`${
              isCollapsed5
                ? "flex justify-between cursor-pointer text-black"
                : ""
            }  flex justify-between cursor-pointer text-[#c13645]`}
          >
            <div className={faq_order_className}>
            {t("faq_heading.Raw denim")}
            </div>
            <div className={order_management}>
              <AiOutlineRight className="text-2xl " />
            </div>
          </div>
          <div
            className={`${
              isCollapsed5 ? "hidden" : ""
            } bg-[#d9d9d9] p-4 mt-3 rounded cursor-default`}
          >
          {t("Anim pariatur")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(FAQ);
