"use client";

import Image from "next/image";
import { useState } from "react";
import { projectList, tagList } from "@/utils/data";
import ModalManager from "@/components/modal-manager";

import "./portfolio.css";

const Portfolio = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [activeProject, setActiveProject] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (project) => {
    setShowModal(true);
    setActiveProject(project);
  };

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
      className="mb-3 mx-1 w-full sm:w-72 h-80 shadow-md hover:shadow-lg hover:-translate-y-2 transition-all hover:bg-slate-200 text-center rounded"
    >
      <button className=" relative" onClick={() => handleProjectClick(project)}>
        <div className=" text-center text-sm">
          <Image
            alt={project.title}
            src={project.thumbnail}
            width="200"
            height="200"
            className="mx-auto mt-2 h-48"
          ></Image>
          <p className="font-bold my-1">{project.title}</p>
          <p className="text-xs">{project.position}</p>
          <p className="text-xs">{project.date}</p>
          <p className=" whitespace-pre-wrap">{project.description}</p>
        </div>
      </button>
    </li>
  ));

  return (
    <section id="projects" className="Section">
      <ModalManager
        activeModal={activeProject}
        isShowModal={showModal}
        onCloseClick={() => setShowModal(false)}
      />
      <h3 className="Title col-span-2 h-min">Projects</h3>
      <div className=" text-center mb-3">
        <span className=" md:text-lg">
          Here are some of the projects that I have done. Including the projects
          I did when I was employed, learning-based projects, and personal
          projects. <br />
          <u>Filter projects by tags:</u>
        </span>
      </div>
      <ul className="flex flex-wrap justify-center mb-4 md:mb-6">
        {tagListItems}
      </ul>
      <ul className="flex flex-wrap justify-center">{projectListItems}</ul>
    </section>
  );
};
export default Portfolio;
