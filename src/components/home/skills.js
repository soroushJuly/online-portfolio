"use client";

import { useState } from "react";
import { langs, tools } from "@/utils/data";

import "./skills.css";

const Skills = () => {
  const [activeLang, setLang] = useState(0);
  const [activeTool, setTool] = useState(0);

  const langListItems = langs.map((lang) => (
    <li key={lang.id}>
      <button
        className={lang.id == activeLang ? "active" : ""}
        onClick={() => handleLangClick(lang.id)}
      >
        {lang.name}
      </button>
    </li>
  ));

  const toolListItems = tools.map((tool) => (
    <li key={tool.id}>
      <button
        className={tool.id == activeTool ? "active" : ""}
        onClick={() => handleToolClick(tool.id)}
      >
        {tool.name}
      </button>
    </li>
  ));

  const handleLangClick = (index) => {
    setLang(index);
  };

  const handleToolClick = (index) => {
    setTool(index);
  };

  return (
    <section id="skills" className="Section Section--white">
      <h3 className="Title col-span-2 h-min">Technical Skills</h3>
      <p className="md:text-xl mb-2 text-center">
        Here are some of the programming languanges that I frequantly use and
        details about how experienced and proficient I am using them. I always
        have the enthusiasm to learn more.
      </p>
      <h4 className=" text-xl md:text-3xl underline mb-2 mt-4 md:my-4">
        Programming languages:
      </h4>
      <ul className=" Button-list flex md:text-xl font-semibold mb-2">
        {langListItems}
      </ul>
      <p
        className=" border-2 rounded text-sm md:text-base border-gray-400 p-3"
        dangerouslySetInnerHTML={{ __html: langs[activeLang].description }}
      />

      <h4 className=" text-xl md:text-3xl underline mb-2 mt-4 md:my-4">
        Engines\Frameworks\Software Used Most Frequently:
      </h4>
      <ul className=" Button-list flex flex-wrap md:text-xl font-semibold mb-2">
        {toolListItems}
      </ul>
      <p
        className=" border-2 rounded text-sm md:text-base border-gray-400 p-3 mb-4"
        dangerouslySetInnerHTML={{ __html: tools[activeTool].description }}
      />
    </section>
  );
};
export default Skills;
