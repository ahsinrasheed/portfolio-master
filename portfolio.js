import emoji from "react-easy-emoji";

export const greetings = {
  name: "Ahsin Rasheed",
  title: "Hi all, I'm M. Ahsin",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript, TypeScript , ReactJs , NodeJs, Relational and Non-Relational Databases and some other cool libraries and frameworks.",
  resumeLink: "https://ahsinrasheed.github.io/Resume/",
};

export const openSource = {
  githubUserName: "ahsinrasheed",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/ahsin.rasheed.7",
  instagram: "https://www.instagram.com/ahsinrasheed/",
  twitter: "https://twitter.com/ahsinbhatti5",
  github: "https://github.com/ahsinrasheed",
  linkedin: "https://www.linkedin.com/in/ahsin-rasheed-9178b4153/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    // emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji("⚡ Integration of third party services such as Firebase/ AWS"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
  {
    Stack: "Database",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Sargodha",
    subHeader: "BS(Hon) in Information Technology",
    duration: "September 2015 - September 2019",
    desc: "I created different websites from PSD to Html, Css. I work on fronted of an admin portal web app",
    descBullets: ["Translated client requirements into high-fidelity prototypes and improved design by receiving feedback from the client", "Participated in the peer-reviews of solution designs and related code"],
  },
];
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Neeopal Messenger",
    companylogo: "/img/icons/common/SRK.png",
    date: "1 November – 2022",
    desc: "MERN Stack Software Engineer",
    descBullets: [
      "Technology Stack: Nodejs, JavaScript, MySQL, PostgreSQL, Sequelize, API Development.",
      "Contributed several APIs for the application's core architecture and modules such as authentication/authorization, profile, scheduling & booking, and payments",
      "Using SAM Framework and Express for creating REST Apis.",
      "Followed the best development, Coding practices and standards to maintain code quality and components re- usability",
    ],
  },
];

export const projects = [
  {
    name: "Abaska Technology ",
    desc: "Profile website for the Compony that provide the solutions to clients, using techniques that are based on current standards of software engineering and project management. ",
    link: "http://www.abaskatech.com//",
  },
  {
    name: "Natours",
    desc: "Natours is An awesome tour booking site built on top of NodeJS",
    link: "https://natours-app-by-ahsin.herokuapp.com/",
  },
];

export const feedbacks = [
  {
    name: "SKR Communication  Marketing",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate.",
  },
];


// "build": "SET NODE_OPTIONS=--openssl-legacy-provider && next build",