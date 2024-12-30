import YoutubeEmbed from "@/components/embed-youtube";
import Carousel from "@/components/carousel";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { projectList } from "@/utils/data";

const Page = async ({ params }) => {
    const slug = await (params).slug
    const projectData = projectList.find((item) => item.modal == slug)
    const projectFeatures = projectData.features.map((item) => (
        <li dangerouslySetInnerHTML={{ __html: item }} key={uuidv4()}></li>
    ))
    const projectImages = projectData.screenShots
    return (
        <main className="main Section">
            <h1 className="border-b-2 text-xl lg:text-2xl font-bold self-start mb-2">
                {projectData.title}
            </h1>
            <div className="w-3/5">
                <YoutubeEmbed embedId={projectData.youtubeEmbed}></YoutubeEmbed>
                <Carousel
                    items={projectImages.map((image) => (
                        <Image
                            key={image}
                            src={image}
                            alt="screenshots of the games made by users of the engine"
                            sizes="100vw"
                            style={{
                                maxWidth: "none",
                                // width: "auto",
                                height: "200px",
                            }}
                            width={300}
                            height={150}
                        />
                    ))}
                    isRotating={true}
                ></Carousel>
                <p className="mb-2">
                    <b>Date: </b>{projectData.date} | <b>Duration: </b>{projectData.duration}
                </p>
                <p className="mb-2">
                    <a href={projectData.linkDownload} target="blank" className="bg-success text-white p-2 rounded-lg mr-2">
                        Download Game
                    </a>
                    <a href={projectData.linkToGithub} target="blank" className="bg-blue-400 text-white p-2 rounded-lg">
                        Link to project&apos;s Github
                    </a>
                </p>
            </div>
            <span className=" my-4 text-blueGray-500 md:text-lg leading-relaxed font-semibold">
                Features & skills:{" "}
            </span>
            <ul className=" text-sm md:text-base ml-2 list-disc list-inside text-gray-600">
                {projectFeatures}
            </ul>
        </main>
    );
};

export default Page;
