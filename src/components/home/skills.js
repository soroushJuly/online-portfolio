"use client";

import { useState } from "react";

import "./skills.css";

const Skills = () => {
  const [activeLang, setLang] = useState(0);

  const langs = [
    {
      name: "C/C++",
      description:
        "Description of the level and experince and things I have done",
    },
    { name: "JavaScripts", description: "ffd" },
    { name: "Python", description: "ddd" },
  ];

  //   cons;

  const handleLangClick = (index) => {
    setLang(index);
  };

  //   function handleToolClick(params) {}

  return (
    <section id="skills" className="Section Section--white">
      <h3 className="Title col-span-2 h-min">Technical Skills</h3>
      <p className="text-xl mb-2 text-center">
        I always have the enthusiasm to learn more.
      </p>
      <h4 className=" text-3xl underline my-4">Programming languages:</h4>
      <ul className=" Button-list flex text-xl font-semibold mb-2">
        <li>
          <button onClick={() => handleLangClick(0)}>{langs[0].name}</button>
        </li>
        <li>
          <button onClick={() => handleLangClick(1)}>{langs[1].name}</button>
        </li>
        <li>
          <button onClick={() => handleLangClick(2)}>{langs[2].name}</button>
        </li>
      </ul>

      <p className=" border-2 rounded border-gray-400 p-2">
        {langs[activeLang].description}
      </p>

      <h4 className=" text-3xl underline my-4">
        Engines\Frameworks\Software Used Frequently:
      </h4>
      <ul>
        <li>
          <button>Unreal Engine</button>
        </li>
        <li>
          <button>Unity Engine</button>
        </li>
        <li>
          <button>OpenGL</button>
        </li>
        <li>
          <button>Vue & React</button>
        </li>
        <li>
          <button>Git</button>
        </li>
        <li>
          <button>Git</button>
        </li>
      </ul>

      <p>Description of the level and experince and things I have done</p>
    </section>
  );
};
export default Skills;
