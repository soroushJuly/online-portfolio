"use client";

import Image from "next/image";
import { useState } from "react";
import { projectList, tagList } from "@/utils/data";

import "./portfolio.css";

const Portfolio = () => {
  const [activeTags, setActiveTags] = useState([]);

  const handleTagClick = (name) => {
    if (checkTagInList(name)) {
      setActiveTags(activeTags.filter((tag) => tag !== name));
    } else {
      setActiveTags(activeTags.concat(name));
    }
  };

  const checkTagInList = (tag) => {
    return activeTags.includes(tag);
  };

  const tagListItems = tagList.map((tag) => (
    <li
      className={checkTagInList(tag.name) ? "tag tag--active" : "tag"}
      key={tag.id}
    >
      <button
        className=" border-purple-400 border-2 rounded-xl hover:bg-slate-300 md:px-2"
        onClick={() => handleTagClick(tag.name)}
      >
        {tag.name}
      </button>
    </li>
  ));

  function checkTags(project) {
    if (!activeTags.length) {
      return project;
    }
    for (let i = 0; i < activeTags.length; i++) {
      const element = activeTags[i];
      if (project.tags.includes(element)) {
        return project;
      }
    }
  }

  const filteredProjectList = projectList.filter(checkTags);
  const projectListItems = filteredProjectList.map((project) => (
    <li
      key={project.id}
      className="mb-3 md:w-72 h-80 hover:shadow-md text-center rounded"
    >
      <button className=" relative">
        <div className=" text-center">
          <Image
            alt={project.title}
            src={project.thumbnail}
            width="200"
            height="200"
            className="mx-auto mt-2"
          ></Image>
          <p>{project.position}</p>
          <p>{project.date}</p>
          <p className=" whitespace-pre-wrap">{project.description}</p>
        </div>
      </button>
    </li>
  ));

  return (
    <section id="projects" className="Section">
      <h3 className="Title col-span-2 h-min">Projects</h3>
      <div className=" text-center mb-3">
        <span className=" text-lg">Filter projects by tags:</span>
      </div>
      <ul className="flex justify-center mb-6">{tagListItems}</ul>
      <ul className="flex flex-wrap">{projectListItems}</ul>
    </section>
  );
};
export default Portfolio;
