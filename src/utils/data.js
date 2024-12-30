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
    with the editor and blueprints. Also, I've built a game using mostly C++ in Unreal.`,
  },
  {
    id: 1,
    name: "Linux",
    description: `<b>My level:</b> Professional <br /> I've worked with Linux in two different companies and during several modules at university
    so I'm confident enough to work with it professionally.`,
  },
  {
    id: 2,
    name: "Git",
    description: `<b>My level:</b> Advanced <br /> I've used git to control and versioning in almost all the projects that I've worked on.
    I know the GitFlow and how to work in teams. Also, I know essential commands to use git.`,
  },
  {
    id: 3,
    name: "Vue & React",
    description: `<b>My level:</b> vue.js: Advanced | react.js: beginner <br /> I've worked with vue.js and nuxt.js for 3 years and I feel
    confident using them. Also, I learned about React recently and made this website using it.`,
  },
];

// -------------------- About -------------------- //
export const about = {
  p1: `Hi there! I'm <b>Soroush Jolai</b>, a dedicated <u>game and engine programmer</u> with a passion for optimizing and creating games.`,
  p2: `I enjoy <b>problem-solving</b> and spending hours coding, always paying <b>close attention to detail</b> in the apps I create.
  I've experince <b>working in teams</b> showcasing effective communication skills and a collaborative spirit.
  Learning new things as a programmer is something I'll always do.`,
  p3: ``,

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
  },
  {
    id: 1,
    title: "Bokeh",
    position: "Programmer/Designer",
    date: "2023",
    thumbnail: "/thumb-bokeh.jpg",
    stack: "Unreal | Game Design | Blueprints",
    tags: ["Game", "Unreal", "c++"],
    description: `Bokeh is the name of the game prototype that I
              developed during the Game Development Process module. I wrote a
              Game Design Document for this game then using Unreal Engine and
              blueprints I made a prototype of the game. Bokeh is a serious game
              about photography. I have implemented an in-game camera that
              players can take pictures with. Also, they can review the pictures
              in the gallery and save the one you like on your hard drive`,
    modal: "Bokeh",
  },
  {
    id: 6,
    title: "Cat with a Vengence",
    position: "Gameplay/UI Programmer",
    date: "2024",
    thumbnail: "/thumb-cat.png",
    stack: "Unreal | Blueprints | Gameplay | UI",
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
  },
  {
    id: 8,
    title: "Monsterfall",
    position: "Game Programmer",
    date: "2024",
    thumbnail: "/thumb-monsterfall.png",
    stack: "Engine | Gameplay | AI | UI",
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
  },
  {
    id: 9,
    title: "Rally Sahara",
    position: "Game Programmer",
    date: "2024",
    thumbnail: "/thumb-rally.jpg",
    stack: "Engine | Graphics | OpenGL | Gameplay",
    tags: ["Game Engine", "Graphics", "c++", "OpenGL", "Gameplay"],
    description: `&quot;Rally Sahara&quot; is the name of the Time-Trial game I
              created leveraging C++. I implemented various effects and
              techniques using OpenGL and OpenGL shader language (GLSL).`,
    modal: "Rally",
    linkDownload: `https://drive.google.com/file/d/1XlFD-InX2NApGDdAkFZmNy2z-1cXhGtt/view?usp=drive_link`,
    linkToGithub: ``,
  },
  {
    id: 10,
    title: "Son of Persia",
    position: "Game Programmer | Game Designer",
    date: "2024",
    thumbnail: "/thumb-persia.png",
    stack: "Game | Unity | VR | Meta Quest",
    tags: ["Game", "Unity", "c#", "VR"],
    description: `&quot;Son of Peria&quot; is the game that I designed and coded
              using Unity (C#) and Meta Quest 2 headsets. It&apos;s an
              action-adventure game based on a Persian myth.`,
    modal: "SonOfPersia",
    linkDownload: `https://drive.google.com/file/d/1MD0fU1NZUd52YRxZMFtjVnP1vHM9z8i7/view?usp=sharing`,
    linkToGithub: `https://github.com/soroushJuly/Son-of-persia-VR`,
  },
  {
    id: 11,
    title: "Space Connector",
    position: "Game Programmer | Game Designer",
    date: "2024",
    thumbnail: "/thumb-space.jpg",
    stack: "Game | Unity | C#",
    tags: ["Game", "Unity", "c#", "Game Jam"],
    description: `Defend the rocket by placing defence nodes and
              making connection between them. First build up your defence by
              clicking desired node from menu on the bottom of screen. Then by
              clicking a parent node and clicking a location, place them on the
              space.`,
    modal: "SpaceConnector",
    linkDownload: `https://soroushjuly.itch.io/space-connectors`,
    linkToGithub: `https://github.com/Shantanu-Bhatt-K/KenneyGameJam/tree/NodeStructure`,
  },
  {
    id: 12,
    title: "MonoEndlessRunner",
    position: "Designer and Game Programmer",
    date: "2024",
    thumbnail: "/thumb-endless.png",
    stack: "Game Engine | C#",
    tags: ["Game", "Game Engine", "c#", "Tools"],
    description: ``,
    modal: "EndlessRunner",
  },
];
