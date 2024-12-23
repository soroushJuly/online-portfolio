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
  p1: `Hi there! It's Soroush.`,
  p2: `I enjoy <b>problem-solving</b> and spending hours coding, always paying <b>close attention to detail</b> in the apps I create.
  My primary focus is on <b>C++/C#</b>, <b>JavaScript</b>, and occasionally <b>Python</b>. 
  Learning new things in this field is something I'll always do.`,
  p3: `My programming focus as a software engineer is centered on <b>game</b> and <b>web</b> applications. I've also collaborated within teams and showcased effective communication skills. 
`,
  p4: "",
  p6: "a software engineer eager about game development. I worked as a software engineer in different teams in the tech industry for about 2 years. I’m currently studying for a master’s in computer games technology with an expected end date of August 2024. The focus of my course is on C++ programming and learning the essential math skills to build high-quality games, I’ve also completed an in-depth Udemy course on C++ and Unreal engine, therefore I have a robust understanding of C++. Based on my experience I can learn new programming languages fast and can easily understand and work on top of others’ codes. Also, I’m comfortable using company-specific engines to build a game as I did in my course. On top of that, I’m working on the game engine  we used at the university and improving it. I have had a passion  for games from a young age and Now I can’t wait to face new challenges in game programming.",
};

export const interests = {
  i3: "Working with C++ code bases, aiming to enhance functionality and <b>optimize</b> for better performance.",
  i4: "Learning French.",
  i5: "Gym.",
};

// -------------------- Portfolio -------------------- //
export const tagList = [
  { id: 0, name: "Game" },
  // { id: 1, name: "Web" },
  { id: 2, name: "AI" },
  { id: 3, name: "Graphics" },
  { id: 4, name: "Unreal" },
  { id: 5, name: "Game Jam" },
  { id: 6, name: "Game Engine" },
  { id: 7, name: "c++" },
  { id: 8, name: "c#" },
];
export const projectList = [
  {
    id: 0,
    title: "The Traveller",
    position: "Programmer/Designer",
    date: "2023",
    thumbnail: "/thumb-the-traveller.jpg",
    description: "C++ | OpenGL | AI",
    tags: ["Game", "c++", "AI", "Graphics"],
    modal: "Traveller",
  },
  {
    id: 1,
    title: "Bokeh",
    position: "Programmer/Designer",
    date: "2023",
    thumbnail: "/thumb-bokeh.jpg",
    description: "Unreal | Game Design | Blueprints",
    tags: ["Game", "Unreal", "c++"],
    modal: "Bokeh",
  },
  {
    id: 6,
    title: "Cat with a Vengence",
    position: "Gameplay/UI Programmer",
    date: "2024",
    thumbnail: "/thumb-cat.png",
    description: "Unreal | Blueprints | Gameplay | UI",
    tags: ["Game", "Unreal", "c++", "Blueprints", "Game Jam"],
    modal: "CatGame",
  },
  {
    id: 8,
    title: "Monsterfall",
    position: "Game Programmer",
    date: "2024",
    thumbnail: "/thumb-monsterfall.png",
    description: "Engine | Gameplay | AI | UI",
    tags: ["Game Engine", "Game", "c#", "Monogame", "AI"],
    modal: "Monsterfall",
  },
  {
    id: 9,
    title: "Rally Sahara",
    position: "Game Programmer",
    date: "2024",
    thumbnail: "/thumb-rally.jpg",
    description: "Engine | Graphics | OpenGL | Gameplay",
    tags: ["Game Engine", "Graphics", "c++", "OpenGL", "Gameplay"],
    modal: "Rally",
  },
  {
    id: 10,
    title: "Son of Persia",
    position: "Game Programmer | Game Designer",
    date: "2024",
    thumbnail: "/thumb-persia.png",
    description: "Game | Unity | VR | Meta Quest",
    tags: ["Game", "Unity", "c#", "VR"],
    modal: "SonOfPersia",
  },
  {
    id: 11,
    title: "Space Connector",
    position: "Game Programmer | Game Designer",
    date: "2024",
    thumbnail: "/thumb-space.jpg",
    description: "Game | Unity | C#",
    tags: ["Game", "Unity", "c#", "Game Jam"],
    modal: "SpaceConnector",
  },
  {
    id: 12,
    title: "MonoEndlessRunner",
    position: "Designer and Game Programmer",
    date: "2024",
    thumbnail: "/thumb-endless.png",
    description: "Game Engine | C#",
    tags: ["Game", "Game Engine", "c#", "Tools"],
    modal: "EndlessRunner",
  },
];
