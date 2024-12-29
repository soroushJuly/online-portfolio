import YoutubeEmbed from "@/components/embed-youtube";
import { projectList } from "@/utils/data";

const Page = async ({ params }) => {
    const slug = await (params).slug
    const projectData = projectList.find((item) => item.modal == slug)
    console.log(slug)
    return (
        <main className="main Section">
            <h1 className="border-b-2 text-xl font-bold self-start mb-1">
                {projectData.title}
            </h1>
            <div className="w-1/2">
                <YoutubeEmbed embedId="491sMXpVJSs"></YoutubeEmbed>
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
                <li>
                    Developed <b>Finite State Machine</b> for enemies.
                </li>
                <li>
                    Developed <b>Seek</b>, and an <b>advanced Wander</b> behaviour
                    for NPCs.
                </li>
                <li>
                    Implemented a <b>collision detection system</b> (AABB) for
                    receiving and causing damage.
                </li>
                <li>
                    Developed a <b>lively HUD</b> using OpenGL 2D renderer.
                </li>
                <li>
                    Implemented four primitive-based(triangle) meshes by defining
                    and coding the{" "}
                    <b>
                        indices, vertices, surface normals, and texture coordinates.
                    </b>
                </li>
                <li>
                    Imported static and skeleton-based meshes in the game and
                    <b> scaled</b>, <b>rotated</b>, and <b>transformed</b> them to
                    match the needs of the game.
                </li>
                <li>
                    Worked with <b>animations</b> of the characters.
                </li>
                <li>
                    Implemented three different <b>lights</b> in the game. Point
                    light, directional light, and spot light using OpenGL.
                </li>
                <li>
                    Programmed <b>3D and 2D camera</b> in C++.
                </li>
            </ul>
        </main>
    );
};

export default Page;
