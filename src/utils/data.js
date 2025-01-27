// -------------------- About -------------------- //
export const about = {
  p1: `Hi there! I'm <b>Soroush</b>, a dedicated <u>game and engine programmer</u> with a passion for optimizing and creating games.`,
  p3: `I enjoy <b>problem-solving</b> and spending hours coding, always paying <b>close attention to detail</b> in the apps I create.
  I've experince <b>working in teams</b> showcasing effective communication skills and a collaborative spirit.
  Learning new things as a programmer is something I'll always do.`,
  p2: `I completed my <b>Master's in Computer Games Technology</b> with <b>distinction (GPA 4.0)</b> from <b>City, University of London</b>, where I worked on exciting projects and deepened my understanding of software and game development.`,

};

export const interests = {
  i3: "Working with C++ code bases, aiming to enhance functionality and <b>optimize</b> for better performance.",
  i4: "Learning French.",
  i5: "Exercising.",
};

// -------------------- Portfolio -------------------- //
export const tagList = [
  { id: 5, name: "Game Jam", label: "Game Jam" },
  { id: 7, name: "c++", label: 'C++ & Unreal Engine' },
  { id: 8, name: "c#", label: 'C# & Unity' },
];
export const projectList = [
  {
    id: 0,
    title: "The Traveller",
    position: "Programmer/Designer",
    date: "2023",
    duration: '3 months',
    thumbnail: "/thumb-the-traveller.jpg",
    screenShots: [],
    stack: "C++ | GLSL | OpenGL | AI",
    tags: ["Game", "c++", "AI", "Graphics"],
    modal: "traveller",
    description: `The Traveller is a 3D Platformer game I
              developed using <b>a custom game engine</b>. The game has a
              cartoony theme and several gameplay elements. Right now the game
              has only level. The goal of the game is to reach the village on
              time and save the village by defeating the final boss. The game is
              fully coded in C++. I developed almost all the features only using
              low-level code without the help of any extra libraries.`,
    linkToGithub: `https://github.com/soroushJuly/AGT-Project`,
    linkDownload: `https://drive.google.com/file/d/1h45mtGM_YbFuhxE0bdz-T7eS8iMi4K3S/view?usp=drive_link`,
    youtubeEmbed: '491sMXpVJSs',
    features: [`Developed <b>Finite State Machine</b> for enemies.`, `Developed <b>Seek</b>, and an <b>advanced Wander</b> behaviour
                    for NPCs.`, `Implemented a <b>collision detection system</b> (AABB) for
                    receiving and causing damage.`, `Developed a <b>lively HUD</b> using OpenGL 2D renderer.`, `Implemented four primitive-based(triangle) meshes by defining
                    and coding the{" "}
                    <b>
                        indices, vertices, surface normals, and texture coordinates.
                    </b>`, ` Imported static and skeleton-based meshes in the game and
                    <b> scaled</b>, <b>rotated</b>, and <b>transformed</b> them to
                    match the needs of the game.`, `Worked with <b>animations</b> of the characters.`, `Implemented three different <b>lights</b> in the game. Point
                    light, directional light, and spot light using OpenGL.`, `Programmed <b>3D and 2D camera</b> in C++.`]
  },
  {
    id: 1,
    title: "Bokeh",
    position: "Programmer/Designer",
    date: "2023",
    duration: '3 months',
    thumbnail: "/thumb-bokeh.jpg",
    screenShots: ["/bokeh/01.png", "/thumb-bokeh.jpg"],
    stack: "C++ | Unreal | Game Design | Blueprints",
    tags: ["Game", "Unreal", "c++"],
    description: `Bokeh is the name of the game prototype that I
              developed during the Game Development Process module. I wrote a
              Game Design Document for this game then using Unreal Engine and
              blueprints I made a prototype of the game. Bokeh is a serious game
              about photography. I have implemented an in-game camera that
              players can take pictures with. Also, they can review the pictures
              in the gallery and save the one you like on your hard drive`,
    modal: "Bokeh",
    youtubeEmbed: null,
    features: [`Wrote an industry-standard Game Design Document.`, `Implemented an in-game camera using <b>"SceneCaptureComponent2D"</b>.`, `Used blueprints to make a timer, interactable areas, etc.`,
      `Developed a HUD using the <b>UMG UI</b> system in Unreal Engine.`, `Made the environment with the <b>Landscape System</b> in Unreal
                Engine.`, `Made realistic grass and flowers using the <b>Foliage System</b>{" "}
                in Unreal Engine`
    ]
  },
  {
    id: 6,
    title: "Cat with a Vengence",
    position: "Gameplay/UI Programmer",
    date: "2024 (Global Game Jam)",
    duration: "3 days",
    thumbnail: "/thumb-cat.png",
    stack: "C++ | Unreal | Blueprints | Gameplay | UI",
    tags: ["Game", "Unreal", "c++", "Blueprints", "Game Jam"],
    description: `Cat with a Vengence is the name of the game
              that I participated in creating during Global Game Jam 2024. From
              idea generation to UI and gameplay programming. I worked in a team
              of six people to create this indie game in just three days. We
              used Unreal Engine and mostly blueprints.`,
    modal: "CatGame",
    linkPage: `https://globalgamejam.org/games/2024/cat-vengeance-5`,
    linkDownload: `https://ggjv4.s3.us-west-1.amazonaws.com/files/games/2024/788367/exec/GlobalGamJam24_Cat_Build.zip?VersionId=Dd1hZnRw.RePH5G0s6kuoOqy4nHGoQnG`,
    linkToGithub: `https://github.com/soroushJuly/GlobalGameJam24`,
    youtubeEmbed: null,
    screenShots: ['/cat/01.png'],
    features: [`Worked in a team to make a game from scratch with a tight deadline.`, `Used blueprints to make a timer, interactable areas, etc.`, `Developed a lively HUD using the <b>UMG UI</b> system in Unreal
                Engine.`, `Worked with the fracture system in Unreal Engine.`, `Worked with the animation system in Unreal Engine.`]
  },
  {
    id: 8,
    title: "Monsterfall",
    position: "Game Programmer",
    date: "2024",
    thumbnail: "/thumb-monsterfall.png",
    screenShots: [],
    youtubeEmbed: "nQ5V7zPAlDY?si=0n-4GAYiscPksCtt",
    stack: "C# | Engine programming | Gameplay | AI | UI",
    tags: ["Game Engine", "Game", "c#", "Monogame", "AI"],
    description: `Monsterfall is an isometric RPG 2D game that I
              developed during the Computer Games Architecture class. I
              developed a simple engine using monogame framework and then
              leveraging that engine, I created this game. I tried to
              incorporate best practices developing the engine and the game, for
              instance I used programming patterns like: singleton pattern,
              data-driven design, etc.`,
    modal: "Monsterfall",
    linkDownload: `https://drive.google.com/file/d/1mT8YHT4CHTT3_G3KqWN_piI6pDnxp7wL/view?usp=sharing`,
    linkToGithub: `https://github.com/soroushJuly/Monsterfall_01`,
    features: [`Implemented <b>event-driven</b> design for input binding and
                other events like sounds in the game. (<b>Observer Pattern</b>)`, `Implemented <b>data-driven</b> design.`, `MVC architecture`,
      `Facade Pattern`, `Singleton Pattern`, `Composite Pattern`, `State Pattern`
    ]
  },
  {
    id: 9,
    title: "Rally Sahara",
    position: "Game Programmer",
    date: "2024",
    duration: "4 months",
    thumbnail: "/thumb-rally.jpg",
    youtubeEmbed: "rGzffMcgBIk",
    screenShots: [],
    stack: "C++ | Graphics | GLSL | OpenGL | Gameplay",
    tags: ["Game Engine", "Graphics", "c++", "OpenGL", "Gameplay"],
    description: `&quot;Rally Sahara&quot; is the name of the Time-Trial game I
              created leveraging C++. I implemented various effects and
              techniques using OpenGL and OpenGL shader language (GLSL).`,
    modal: "Rally",
    linkDownload: `https://drive.google.com/file/d/1XlFD-InX2NApGDdAkFZmNy2z-1cXhGtt/view?usp=drive_link`,
    linkToGithub: `https://github.com/soroushJuly/RallyGame`,
    features: [`The path is created programmatically using "<b>Catmull-Rom splines</b>".`,
      `Implemented following effect using GLSL and OpenGL:<br /><b>Blur Effect</b> <br /><b>Mirror</b> <br /><b>Multi-texturing</b> <br /><b>Spotlights and Directional light</b>. <br /><b>Toon shader</b>. <br /><b>Instanced Rendering</b>. <br /><b>2.5D Text</b>.`]
  },
  {
    id: 10,
    title: "Son of Persia",
    position: "Game Programmer | Game Designer",
    date: "2024",
    duration: "4 months",
    screenShots: ["/persia/01.png", "/persia/02.png", "/persia/03.png", "/persia/04.png", "/persia/05.png",
      "/persia/06.png", "/persia/07.png", "/persia/08.png", "/persia/09.png"],
    thumbnail: "/thumb-persia.png",
    stack: "C# | Game | Unity | VR | Meta Quest",
    tags: ["Game", "Unity", "c#", "VR"],
    description: `&quot;Son of Peria&quot; is the game that I designed and coded
              using Unity (C#) and Meta Quest 2 headsets. It&apos;s an
              action-adventure game based on a Persian myth.`,
    modal: "SonOfPersia",
    linkDownload: `https://drive.google.com/file/d/1MD0fU1NZUd52YRxZMFtjVnP1vHM9z8i7/view?usp=sharing`,
    linkToGithub: `https://github.com/soroushJuly/Son-of-persia-VR`,
    features: [`Worked with Unity <b>XR toolkit</b> to develop a fully
                functional VR game.`, `Implemented bow and arrow physics and mechanics in C#.`, `Created a nice environment and atmosphere using Unity Engine.`]
  },
  {
    id: 11,
    title: "Space Connector",
    position: "Game Programmer | Game Designer",
    date: "2024 (Kenney Game Jam)",
    duration: "3 days",
    thumbnail: "/thumb-space.jpg",
    screenShots: ["/space-connector/01.png", "/space-connector/02.png", "/space-connector/03.png",
      "/space-connector/04.png", "/space-connector/05.png"],
    YoutubeEmbed: null,
    stack: "C# | Game Jam | Game | Unity ",
    tags: ["Game", "Unity", "c#", "Game Jam"],
    description: `Defend the rocket by placing defence nodes and
              making connection between them. First build up your defence by
              clicking desired node from menu on the bottom of screen. Then by
              clicking a parent node and clicking a location, place them on the
              space.`,
    modal: "SpaceConnector",
    linkDownload: `https://soroushjuly.itch.io/space-connectors`,
    linkToGithub: `https://github.com/Shantanu-Bhatt-K/KenneyGameJam/tree/NodeStructure`,
    features: [`Worked in a team to make a game from scratch in a tight
                schedule.`, `Developed many gameplay and UI features in <b>Unity</b>.`]
  },
  {
    id: 12,
    title: "MonoEndlessRunner",
    position: "Programmer and designer",
    date: "2024",
    thumbnail: "/thumb-endless.png",
    stack: "C# | Game Engine | Tools programming",
    tags: ["Game", "Game Engine", "c#", "Tools"],
    description: `MonoEndlessRunner is a no-code game engine and tool developed to help designers and non-programmers make an endless runner game from scratch.`,
    modal: "endless_runner_engine",
  },
];

// -------------------- Skills -------------------- //
// "Description of the level and experince and things I have done",
export const langs = [
  {
    id: 0,
    name: "C/C++",
    description: `<b>My level:</b> Advanced <br />I learned <b>C</b> during my bachelor's at Tehran University in 2015.
     I created a simple Pacman game with only C as the final project. <br /> During the Electronic Systems Object-Oriented Simulations module, 
     I used <b>C++</b> to create an application to distinguish objects from each other in 2019. In March 2023, I finished a Udemy course called 
     "The Unreal Arsenal: Learn C++ and Unreal Engine" in which I learned intermediate and advanced subjects about C++ and also coded a project 
     in C++ in Unreal Engine. I also finished a module during my master's called "Object-Oriented Programming in C++". In this module, I reviewed
      all the important topics in C++ and object-oriented programming. Also, in the Advanced Games Technology module, I code a complete level of a game
      only using C++. I coded 3D math problems using C++. I feel pretty confident coding in C++.
     `,
  },

  {
    id: 1,
    name: "JavaScript",
    description: `<b>My level:</b> Advanced <br /> I started self-studying JavaScript on 2019. My first professional project with JavaScript was on 2020
    and since then I worked for differen companies until 2023 and I got involved in different projects. Therefore, I can say I have more than three years
    of expreince with JavaScripts.
  `,
  },
  {
    id: 2,
    name: "Python",
    description: `<b>My level:</b> Beginner <br /> I have used Python several times during my time at university. I feel I can code Python easily since it is easier 
  than C++ and JavaScript and since I know the Basics.`,
  },
];

export const tools = [
  {
    id: 0,
    name: "Unreal Engine",
    description: `<b>My level:</b> Intermediate <br /> I've made several games with Unreal Engine. Some were learning-based projects
    and one was my final project for one of my university modules. I'm comfortable with using Unreal for game development and I'm familiar
    with the editor and blueprints. Also, I've built a game using mostly C++ in Unreal.
    <br />Here is the links to related projects: 
    <br /><a href="projects/${projectList[2].modal}">${projectList[2].title}</a>`,
  },
  {
    id: 1,
    name: "Unity",
    description: `<b>My level:</b> Intermediate <br /> I've made couple of games using Unity including an VR experince. I'm very comfortable writing scripts in Unity
    since the language is c#. 
    <br />Here is the links to related projects: 
    <br /><a href="projects/${projectList[5].modal}">${projectList[5].title}</a>
    <br /><a href="projects/${projectList[6].modal}">${projectList[6].title}</a>`,
  },
  {
    id: 2,
    name: "Linux",
    description: `<b>My level:</b> Professional <br /> I've worked with Linux in two different companies and during several modules at university
    so I'm confident enough to work with it professionally.`,
  },
  {
    id: 3,
    name: "Git",
    description: `<b>My level:</b> Advanced <br /> I've used git to control and versioning in almost all the projects that I've worked on.
    I know the GitFlow and how to work in teams. Also, I know essential commands to use git.`,
  },
  {
    id: 4,
    name: "Vue & React",
    description: `<b>My level:</b> vue.js: Advanced | react.js: beginner <br /> I've worked with vue.js and nuxt.js for 3 years and I feel
    confident using them. Also, I learned about React recently and made this website using it.`,
  },
];