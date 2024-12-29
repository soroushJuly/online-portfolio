"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { projectList, tagList } from "@/utils/data";
import ModalManager from "@/components/modal-manager";

import "./portfolio.css";

const Portfolio = () => {
  const [activeTags, setActiveTags] = useState(() => {
    let list = []
    tagList.forEach(element => {
      list.push(element.name)
    });
    return list;
  });
  const [activeProject, setActiveProject] = useState({});
  const [showModal, setShowModal] = useState(false);
  const router = useRouter()

  const handleProjectClick = (project) => {
    router.push('projects/' + project.modal)
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

  const tagListItems = tagList.map((tag) => {
    if (checkTagInList(tag.name)) {
      return (<li className="tag tag--active" key={tag.id}
      >
        <button
          className="tag__button border-success"
          onClick={() => handleTagClick(tag.name)}
        >
          {tag.label}
          <span className="material-icons text-success">
            check
          </span>
        </button>
      </li>)
    }
    else {
      return (<li className="tag" key={tag.id}
      >
        <button
          className="tag__button border-colorTertiary"
          onClick={() => handleTagClick(tag.name)}
        >
          {tag.label}
          <span className="material-icons text-error">
            close
          </span>
        </button>
      </li>)
    }
  });

  function checkTags(project) {
    if (!activeTags.length) {
      return null;
    }
    for (let i = 0; i < activeTags.length; i++) {
      const element = activeTags[i];
      if (project.tags.includes(element)) {
        return project;
      }
    }
  }

  const filteredProjectList = projectList.filter(checkTags);
  const projectListItems = filteredProjectList.length ? filteredProjectList.map((project) => (
    <li
      key={project.id}
      className="mb-3 p-3 mx-1 min-h-[220px] w-full shadow-md hover:shadow-lg hover:-translate-y-2 transition-all hover:bg-slate-200 text-center rounded"
    >
      <button className="w-full h-full relative" onClick={() => handleProjectClick(project)}>
        <div className="flex h-full items-center text-center text-sm">
          <Image
            alt={project.title}
            src={project.thumbnail}
            width="200"
            height="200"
            className="mr-3"
          ></Image>
          <div className="flex flex-col h-full text-left">
            <p className="text-lg font-bold my-1">{project.title}<span className="text-xs font-normal pl-2">{project.date}</span></p>
            <p className="text-sm mb-1">{project.position}</p>
            <p className="font-bold whitespace-pre-wrap mb-1">{project.stack}</p>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
        </div>
      </button>
    </li>
  )) : <p>No category selected!</p>;

  return (
    <section id="projects" className="Section">
      <ModalManager
        activeModal={activeProject}
        isShowModal={showModal}
        onCloseClick={() => setShowModal(false)}
      />
      <h3 className="Title col-span-2 h-min">Featured Projects</h3>
      <div className=" text-center mb-3">
        <span className=" md:text-lg">
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
