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
      <p className="text-xl mb-2 text-center">
        I always have the enthusiasm to learn more.
      </p>
      <h4 className=" text-3xl underline my-4">Programming languages:</h4>
      <ul className=" Button-list flex text-xl font-semibold mb-2">
        {langListItems}
      </ul>
      <p className=" border-2 rounded border-gray-400 p-3">
        {langs[activeLang].description}
      </p>

      <h4 className=" text-3xl underline my-4">
        Engines\Frameworks\Software Used Most Frequently:
      </h4>
      <ul className=" Button-list flex text-xl font-semibold mb-2">
        {toolListItems}
      </ul>
      <p className=" border-2 rounded border-gray-400 p-3 mb-4">
        {tools[activeTool].description}
      </p>
    </section>
  );
};
export default Skills;
