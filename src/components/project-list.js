const projects = [
    {
        id: 1,
        title: "Food Application",
        description: "Intro to Node, Express, and File Storage",
        long_description: "Each project should have about a full page of description for the project",
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
        long_description: "Each project should have about a full page of description for the project",
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
        title: "Banking Mongo Setup",
        description: "Implementing Mongo Databases and RESTful API",
        long_description: "Each project should have about a full page of description for the project",
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
        title: "Banking MERN & Sessions",
        description: "Introducting to Using Sessions in React",
        long_description: "Each project should have about a full page of description for the project",
        technologies:[
            "Sessions",
            "Mongo",
            "Express",
            "React",
            "Node",
            
        ],
        contributions: "Explanation of your particular contributions.",
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
        description: "First Group Project",
        long_description: "Each project should have about a full page of description for the project",
        technologies:[
            "Git",
            "Mongo",
            "Express",
            "React",
            "Node",
        ],
        contributions: "For this projects I did several backend routes, frontend components, and a large section of styling",
        image: "../../images/project5/project_icon.png",
        link: "/project/5",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project5',
        gallery: [
            "../../images/project5/project_icon.png",
            "../../images/project5/project_icon.png",
            "../../images/project5/project_icon.png",
        ],
        video: "../../images/project5/project_5.mkv"
    },
    {
        id: 6,
        title: "Banking Application Frontend",
        description: "Group Assignment To Build a React Frontend",
        long_description: "Each project should have about a full page of description for the project",
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
            "../../images/project6/project_icon.png",
            "../../images/project6/project_icon.png",
            "../../images/project6/project_icon.png",
        ],
        video: "../../images/project6/project_6.mkv"
    },
    {
        id: 7,
        title: "Banking Application Backend",
        description: "Group Assignment to Build an Express Backend",
        long_description: "Each project should have about a full page of description for the project",
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
            "../../images/project7/project_icon.png",
            "../../images/project7/project_icon.png",
            "../../images/project7/project_icon.png",
        ],
        video: "../../images/project7/project_7.mkv"
    },
    {
        id: 8,
        title: "Honors Project",
        description: "Exploring Some Software Engineering Best Practices",
        long_description: "Each project should have about a full page of description for the project",
        technologies:[
            "Jest",
            "Github Actions",
            "YAML",
        ],
        contributions: "I created and managed our Kanban board, as well as wrote the backend tests to automatically run on each pull request.",
        image: "../../images/project8/project_icon.png",
        link: "/project/8",
        github: 'https://github.com/JessiStrattonWeber/CS3750-Portfolio/tree/main/project8',
        gallery: [
            "../../images/project8/project_icon.png",
            "../../images/project8/project_icon.png",
            "../../images/project8/project_icon.png",
        ],
        video: "../../images/project8/project_8.mkv"
    },
    {
        id: 9,
        title: "Final Portfolio",
        description: "Final Portfolio of Software Engineering Assignments",
        long_description: "Each project should have about a full page of description for the project",
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