import {

  //about
  web,
  learn,
  comm,
  circle,
  target,
  brain,

  //exp
  codibly,
  aptiv,
  edualy,


  //tech
  reactjs,
  python,
  tailwind,
  nodejs,
  jest,
  threejs,
  office,
  ps,
  html,
  css,
  javascript,
  typescript,
  git,
  figma,
  mysql,
  vite,
  php,
  cpp,

  //proj
  snake_logo,
  balls_logo,
  crud_logo,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [

  {
    title: "Understanding SDLC principles",
    icon: web,
  },
  {
    title: "Open to acquire knowledge ",
    icon: learn,
  },
  {
    title: "Communicative and flexible",
    icon: comm,
  },
  {
    title: "Experienced in Agile Scrum",
    icon: circle,
  },
  {
    title: "Committed to reach target",
    icon: target,
  },
  {
    title: "Creative problem solver",
    icon: brain,
  },
];

const experiences = [
  {
    title: "QA Intern",
    company_name: "Codibly",
    icon: codibly,
    date: "Feb 2019",
    points: [
      "Performing stress tests using JMeter tool and manual unit testing",
      "Participating in training sessions on testing methodologies",
      "Actively contributing in meetings organizing work (XScrum methodologyX)",
      "Developing web applications as a means of skill enhancement (XJSX,-XTSX,-XHTMLX,-XCSSX)",
    ],
  },
  {
    title: "Technician Intern",
    company_name: "Aptiv",
    icon: aptiv,
    date: "Oct 2020",
    points: [
      "Maintenance of physical network systems - rack cabinets and freestanding server stations",
      "Installation of integrated circuits, and broad electronic work",
      "Helpdesk support",
      "Creating simple testing scripts (XPythonX).",
    ],

  },
  {
    title: "Tutor",
    company_name: "Edualy",
    icon: edualy,
    date: "Sep 2021",
    points: [
      "Coaching students for high school diploma exams in Computer Science (XPythonX,-XC++X,-XAccessX,-XExcelX) and mathematics",
      "Preparing students in professional exams (XJSX, -XHTMLX, -XCSSX, -XMySQLX)",
      "Tutoring at the university level primarily in web technologies (XJSX, -XNodeX) and algorithms and data structures (XPythonX, -XC++X)",
    ],

  },

];

const links = {
  "Scrum methodology": "https://www.scrum.org/",
  "JS": "https://www.javascript.com/",
  "TS": "https://www.typescriptlang.org/",
  "HTML": "https://www.w3schools.com/html/",
  "CSS": "https://www.w3schools.com/css/",
  "Python": "https://www.python.org/",
  "Access": "https://www.microsoft.com/en-us/microsoft-365/access",
  "Excel": "https://www.microsoft.com/en-us/microsoft-365/access",
  "C++": "https://cplusplus.com/",
  "MySQL": "https://www.mysql.com/",
  "Node": "https://nodejs.org/en"
};

const technologies = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Vite Js",
    icon: vite,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Microsoft Office",
    icon: office,
  },
  {
    name: "Photoshop",
    icon: ps,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Three JS",
    icon: threejs,
  },



];



const projects = [
  {
    name: "Snake Game",
    description:
      "Snake Game is essentially my first encounter with programming, created as part of Client-Side Application classes.\n\n The project is based on a simple interval that changes the styles of div elements according to the 'movement' of the snake, randomly generates the position of the fruit on the board, and uses a straightforward collision mechanism involving the use of element classes. \nI must admit that its presence here is primarily due to nostalgia.",
    tags: [
      {
        name: "Highschool-Project",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Game",
        color: "pink-text-gradient",
      },
      {
        name: "Frontend",
        color: "yellow-text-gradient",
      },
    ],
    image: snake_logo,
    source_code_link: "https://github.com/MiernikA/Snake-Game",
    demo_code_link: "https://miernika.github.io/Snake-Game/",
  },
  {
    name: "Balls Game",
    description:
      `Another project for the Client Application is a game that is a replica of the widely available ball game. \n\nThe game involves arranging balls of the same color in rows, columns, or diagonally and eliminating them in groups of five. 
      From a technical standpoint, it involves a grid of div elements generated at random positions with randomly colored balls.\n Win condition based on the number of balls on the board, and the core of the game is the Depth-First Search (DFS) algorithm for finding paths. \nThe project is essentially 100% TypeScript.`,
    tags: [
      {
        name: "Highschool-Project",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Game",
        color: "pink-text-gradient",
      },
      {
        name: "Frontend",
        color: "yellow-text-gradient",
      },
    ],
    image: balls_logo,
    source_code_link: "https://github.com/MiernikA/Balls-Game",
    demo_code_link: "https://miernika.github.io/Balls-Game/",
  },
  {
    name: "Crud Canals",
    description:
      "A CRUD (Create, Read, Update, Delete) application designed for visualizing the percentage distribution of a channel based on its assigned value on a pie chart graph. \n\nThe entire backend of the application is built using PHP Laravel, complete with integrated tests. On the other hand, the front end utilizes React on Vite templates, and the entire system relies on a local database.",
    tags: [
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "App",
        color: "pink-text-gradient",
      },
      {
        name: "Full-Stack",
        color: "yellow-text-gradient",
      },
    ],
    image: crud_logo,
    source_code_link: "https://github.com/MiernikA/Crud-Canals",
    demo_code_link: "https://github.com/MiernikA/Crud-Canals",
  },
];

export { skills, technologies, projects, experiences, links };
