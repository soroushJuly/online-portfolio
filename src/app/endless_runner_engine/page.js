import Image from "next/image";
import "./endless-page.css";
import YoutubeEmbed from "@/components/embed-youtube";

export default function EndlessRunnerEngine() {
  const gamesImages = [
    { id: 0, path: "Picture1.jpg" },
    { id: 1, path: "Picture2.jpg" },
    { id: 2, path: "Picture3.jpg" },
    { id: 3, path: "Picture4.jpg" },
    { id: 4, path: "Picture5.jpg" },
    { id: 5, path: "Picture6.jpg" },
    { id: 6, path: "Picture7.jpg" },
    { id: 7, path: "Picture8.jpg" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-3xl bold mb-6 font-bold">MonoEndlessRunner Engine</h1>
      <h2 className="text-xl mb-8 font-bold">
        A no-code game engine to make endless runner games
      </h2>
      <div>
        <p className="float-left mr-4">Download the application (Windows):</p>
        <a
          target="_blank"
          href="https://github.com/soroushJuly/MonoEditorEndless/archive/refs/heads/master.zip"
          className="float-left text-blue-600 underline"
        >
          Download
        </a>
      </div>
      <div>
        <p className="float-left mr-4">Download assets:</p>
        <a
          target="_blank"
          href="https://drive.google.com/uc?export=download&id=17XYjVFfAIciibl_IbywaxChAgDISUUbN"
          className="float-left underline text-blue-600"
        >
          Download
        </a>
      </div>
      <div className="mt-5 w-1/2">
        <YoutubeEmbed embedId="VkUCOXJ5lDE"></YoutubeEmbed>
      </div>
      <div className="mt-5 font-bold">
        Screenshots of the games made by user of the engine:
      </div>
      <div className="flex flex-wrap mt-2">
        {gamesImages.map((gamesImages) => (
          <Image
            key={gamesImages.id}
            src={"/endless-runner/" + gamesImages.path}
            alt="screenshots of the games made by users of the engine"
            sizes="100vw"
            style={{
              width: "auto",
              height: "200px",
            }}
            width={300}
            height={150}
          />
        ))}
      </div>
      <div className="mt-5 font-bold">Features and skills</div>
      <ul className="mt-2">
        <li>- Developed a game engine from scratch using only basic features of MonoGame in C#.</li>
        <li>- implemented a complete set of tools using ImGui.Net.</li>
        <li>- Use of design patterns like Observer pattern, Aggregator pattern, Singleton, etc.</li>
      </ul>
    </main>
  );
}
