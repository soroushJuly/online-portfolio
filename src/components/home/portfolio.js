"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { projectList, tagList } from "@/utils/data";

import "./portfolio.css";

const Portfolio = () => {
  const [activeTags, setActiveTags] = useState([]);
  const router = useRouter()

  const handleProjectClick = (project) => {
    router.push('projects/' + project.modal)
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
      return (<li className="tag" key={tag.id}
      >
        <button
          className="tag__button tag--active border-success"
          onClick={() => handleTagClick(tag.name)}
        >
          {tag.label}
        </button>
      </li>)
    }
    else {
      return (<li className="tag" key={tag.id}
      >
        <button
          className="tag__button"
          onClick={() => handleTagClick(tag.name)}
        >
          {tag.label}
        </button>
      </li>)
    }
  });

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
      className="mb-3 p-3 mx-1 min-h-[220px] w-full shadow-md hover:shadow-lg hover:-translate-y-2 transition-all hover:bg-slate-200 text-center rounded"
    >
      <button className="w-full h-full relative" onClick={() => handleProjectClick(project)}>
        <div className="flex h-full items-center text-center text-sm">
          <Image
            title="mammals"
            alt={project.title}
            src={project.thumbnail}
            width="200"
            height="200"
            className="card__image"
          ></Image>
          <div className="flex flex-col h-full text-left">
            <p className="text-lg xl:text-xl font-bold my-1">{project.title}<span className="text-xs font-normal pl-2">{project.date}</span></p>
            <p className="text-sm mb-1">{project.position}</p>
            <p className="font-bold whitespace-pre-wrap mb-1">{project.stack}</p>
            <p dangerouslySetInnerHTML={{ __html: project.description }} />
          </div>
          <span className="card__details">Click on the card for more details</span>
        </div>
      </button>
    </li>
  ));

  return (
    <section id="projects" className="Section">
      <h3 className="Title col-span-2 h-min">Featured Projects</h3>
      <div className=" text-center mb-3">
        <span className=" md:text-lg">
          <u>Select to show only:</u>
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
