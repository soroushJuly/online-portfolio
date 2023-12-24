import Image from "next/image";
import { projectList, tagList } from "@/utils/data";

const Portfolio = () => {
  const tagListItems = tagList.map((tag) => (
    <li key={tag.id} className="mr-3">
      <button className=" border-purple-400 border-2 rounded-xl hover:bg-slate-300 md:px-2">
        {tag.name}
      </button>
    </li>
  ));

  const projectListItems = projectList.map((project) => (
    <li
      key={project.id}
      className="mb-3 md:w-72 h-80 hover:shadow-md text-center"
    >
      <button className=" relative">
        <div className=" text-center">
          <Image
            alt={project.title}
            src={project.thumbnail}
            width="200"
            height="200"
            className="mx-auto"
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
