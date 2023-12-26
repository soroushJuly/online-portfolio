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
  p1: "Hi, it's Soroush!",
  p2: "I <b>love programming</b>! I can sit down and <b>solve problems</b> and code for hours. I always pay <b>attention to the details</b> and enjoy seeing the final awesome application. I have experience with a huge stack of programming languages, but I tried to limit myself to <b>C++/C#</b>, <b>JavaScript</b>, and sometimes <b>Python</b>. I'll never stop learning new things.",
  p3: "I've worked as a professional software engineer (employed and freelance) for <b>over 3 years</b> with a focus mainly on web applications meanwhile I've followed my other passion which is <b>game programming</b>. I've worked with different teams and managed to <b>communicate effectively</b>. ",
  p4: "I learned the <b>Unreal Engine</b> in University and by self-studying. I created some games using this engine.",
  p5: "I completed my bachelor's in Electrical Engineering in 2019, and now I'm studying <b>Master's in Computer Games Technology</b> with an expected finish date in 2024",
  p6: "a software engineer eager about game development. I worked as a software engineer in different teams in the tech industry for about 2 years. I’m currently studying for a master’s in computer games technology with an expected end date of August 2024. The focus of my course is on C++ programming and learning the essential math skills to build high-quality games, I’ve also completed an in-depth Udemy course on C++ and Unreal engine, therefore I have a robust understanding of C++. Based on my experience I can learn new programming languages fast and can easily understand and work on top of others’ codes. Also, I’m comfortable using company-specific engines to build a game as I did in my course. On top of that, I’m working on the game engine  we used at the university and improving it. I have had a passion  for games from a young age and Now I can’t wait to face new challenges in game programming.",
};

export const interests = {
  i2: "I'm currently learning how to develop an <b>AR/VR application</b> using <b>Unity</b> and so far, I've found it interesting.",
  i3: "I love to work on C++ code bases and try to improve the functionality or <b>optimize the code</b> to get the best performance.",
  i4: "I believe French is a charming and hard-to-understand language. I love <b>learning French</b>. I study French almost every day.",
};

// -------------------- Portfolio -------------------- //
export const tagList = [
  { id: 0, name: "Game" },
  { id: 1, name: "Web" },
  { id: 2, name: "AI" },
  { id: 3, name: "Graphics" },
  { id: 4, name: "Unreal" },
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
    id: 2,
    title: "OstadBank",
    position: "Software developer",
    date: "2021 - 2022",
    thumbnail: "/thumb-ostadbank.jpg",
    description: "JavaScript | Vue.js | Nuxt.js | HTML | CSS",
    tags: ["Web"],
    modal: "Ostadbank",
  },
  {
    id: 3,
    title: "HiExchange",
    position: "Software Developer",
    date: "2021",
    thumbnail: "/thumb-hi-exchange.jpg",
    description: "JavaScript | Vue.js | Nuxt.js | HTML | CSS",
    tags: ["Web"],
    modal: "HiExchange",
  },
  {
    id: 4,
    title: "EZREEZ",
    position: "Software Developer",
    date: "2020",
    thumbnail: "/thumb-ezreez.jpg",
    description: "JavaScript | Vue.js | Nuxt.js | HTML | CSS",
    tags: ["Web"],
    modal: "Ezreez",
  },
  {
    id: 5,
    title: "Online Portfolio",
    position: "Software Developer/Designer",
    date: "2023",
    thumbnail: "/thumb-portfolio.jpg",
    description: "JavaScript | React.js | Next.js | HTML | CSS",
    tags: ["Web"],
    modal: "Portfolio",
  },
];
