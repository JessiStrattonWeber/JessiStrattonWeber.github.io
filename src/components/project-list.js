const projects = [
    {
        id: 1,
        title: "Food Application",
        description: "Intro to Node, Express, and File Storage",
        long_description: "In this project we created an application to store and search for people's favorite foods.",
        technologies:[
            "HTML",
            "Node",
            "Express"
        ],
        contributions: "This was my first assignment for this class. I built off what was learned in the tutorial to complete the project.",
        image: "../../images/project1/project_icon.png",
        link: "/project/1",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project1',
        gallery: [
            "../../images/project1/1.png",
            "../../images/project1/2.png",
            "../../images/project1/3.png",
            "../../images/project1/4.png",
            "../../images/project1/5.png",
        ],
        video: "../../images/project1/project_1.mkv"
    },
    {
        id: 2,
        title: "Four in a Row",
        description: "First Look At Using React",
        long_description: "In this project we were tasks to build off of a tic-tac-toe game we build previously and convert it into a connect four game using React.",
        technologies:[
            "React",
            "Bootstap",
            "CSS",
        ],
        contributions: "For this assignment I met the base requirements and continued on to include bootstrap styling.",
        image: "../../images/project2/project_icon.png",
        link: "/project/2",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project2',
        gallery: [
            "../../images/project2/1.png",
            "../../images/project2/2.png",
            "../../images/project2/3.png",
            "../../images/project2/4.png",
        ],
        video: "../../images/project2/project_2.mkv"
    },
    {
        id: 3,
        title: "Mongo Setup",
        description: "Implementing Mongo Databases and RESTful API",
        long_description: "In this assignment we set up a Mongo database and learned created backend code to do basic CRUD operations on records.",
        technologies:[
            "Node",
            "Express",
            "Mongo",
            "Thunder Client"
        ],
        contributions: "In this project I build the backend for a banking application as well as RESTful requests in Thunderclient to test these routes.",
        image: "../../images/project3/project_icon.png",
        link: "/project/3",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project3',
        gallery: [
            "../../images/project3/1.png",
            "../../images/project3/2.png",
            "../../images/project3/3.png",
            "../../images/project3/4.png",
        ],
        video: "../../images/project3/project_3.mkv"
    },
    {
        id: 4,
        title: "MERN & Sessions",
        description: "Introducting to Using Sessions in React",
        long_description: "In this project we added simple frontend functionality of a banking application and session tracking to make a login system. This code helped set the path for a later group assignment.",
        technologies:[
            "Sessions",
            "Mongo",
            "Express",
            "React",
            "Node",
            
        ],
        contributions: "I created the frontend, simple navigation menu, and implemented sessions to bring login functionality.",
        image: "../../images/project4/project_icon.png",
        link: "/project/4",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project4',
        gallery: [
            "../../images/project4/1.png",
            "../../images/project4/2.png",
            "../../images/project4/3.png",
            "../../images/project4/4.png",
        ],
        video: "../../images/project4/project_4.mkv"
    },
    {
        id: 5,
        title: "Hangman Game",
        description: "First Group Project, Build a Game of Hangman",
        long_description: "This was our first group assignment where were tasked with working in a group of three to build a hangman game with 1000+ word options, and a persistent scoreboard.",
        technologies:[
            "Git",
            "Mongo",
            "Express",
            "React",
            "Node",
        ],
        contributions: "For this projects I did several backend routes, frontend components, created images, implemented styling, and wrote a script to store all the words to the database.",
        image: "../../images/project5/project_icon.png",
        link: "/project/5",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project5',
        gallery: [
            "../../images/project5/1.png",
            "../../images/project5/2.png",
            "../../images/project5/3.png",
            "../../images/project5/4.png",
            "../../images/project5/5.png",
            "../../images/project5/6.png",
        ],
        video: "../../images/project5/project_5.mkv"
    },
    {
        id: 6,
        title: "Banking Frontend",
        description: "Group Assignment To Build a React Frontend",
        long_description: "In this group assignment we were responsible for making a clean frontend for a banking application. We decided to style it after our group name: The Power Puff Girls",
        technologies:[
            "Git",
            "Bootstrap",
            "React",
            "Node",
        ],
        contributions: "I build many of the components and did the majority of styling including images, fonts, colors, layouts, and more.",
        image: "../../images/project6/project_icon.png",
        link: "/project/6",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project6',
        gallery: [
            "../../images/project6/1.png",
            "../../images/project6/2.png",
            "../../images/project6/3.png",
            "../../images/project6/4.png",
            "../../images/project6/5.png",
            "../../images/project6/6.png",
            "../../images/project6/7.png",
            "../../images/project6/8.png",
        ],
        video: "../../images/project6/project_6.mkv"
    },
    {
        id: 7,
        title: "Banking Backend",
        description: "Group Assignment to Build an Express Backend",
        long_description: "This was the final stage of our group project where we created the backend functionality and connected it to the frontend to form a fully functional MERN application.",
        technologies:[
            "Git",
            "Mongo",
            "Express",
        ],
        contributions: "I handled making the same backend routes work for both employee and customer requests. I also did work on getting the database set up.",
        image: "../../images/project7/project_icon.png",
        link: "/project/7",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project7',
        gallery: [
            "../../images/project7/1.png",
            "../../images/project7/2.png",
            "../../images/project7/3.png",
            "../../images/project7/4.png",
            "../../images/project7/5.png",
            "../../images/project7/6.png",
            "../../images/project7/7.png",
            "../../images/project7/8.png",
        ],
        video: "../../images/project7/project_7.mkv"
    },
    {
        id: 8,
        title: "Honors Project",
        description: "Exploring Some Software Engineering Best Practices",
        long_description: "For my honors project I helped my group explore some software engineering best practices including, test driven development, git pull requests, kanban boards, and more.",
        technologies:[
            "Jest",
            "Github Actions",
            "YAML",
            "Trello Boards",
        ],
        contributions: "I created and managed our Kanban board, as well as wrote the backend tests to automatically run on each pull request.",
        image: "../../images/project8/project_icon.png",
        link: "/project/8",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project8',
        gallery: [
            "../../images/project8/1.png",
            "../../images/project8/2.png",
            "../../images/project8/3.png",
            "../../images/project8/4.png",
            "../../images/project8/5.png",
        ],
        video: "../../images/project8/project_8.mkv"
    },
    {
        id: 9,
        title: "Final Portfolio",
        description: "Final Portfolio of Software Engineering Assignments",
        long_description: "This project is this very site! A portfolio of this semsters work, hosted through github pages.",
        technologies:[
            "React",
            "Github Pages",
            "Git"
        ],
        contributions: "For this project I created the base template for my group and intructions to deploy their sites. I then build off of my template to complete my own portfolio.",
        image: "../../images/project9/project_icon.png",
        link: "/project/9",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project9',
        gallery: [
            "../../images/project9/project_icon.png",
            "../../images/project9/project_icon.png",
            "../../images/project9/project_icon.png",
        ],
        video: "../../images/project9/project_9.mkv"
    },
];

export default projects;