import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa6';
import firstProjectImage from './assets/img/first-project.png';
import secondProjectImage from './assets/img/second-project.png';
import thirdProjectImage from './assets/img/third-project.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <SiMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'Proficiency in MongoDB, showcasing skills in schema design, CRUD operations, indexing, aggregation, and data modeling.',
  },
  {
    id: nanoid(),
    title: 'ExpressJS',
    icon: <SiExpress className='h-16 w-16 text-emerald-500' />,
    text: 'Intermediate expertise in Express, featuring skills in routing, middleware, databases, APIs, authentication, testing, and security implementation.',
  },
  {
    id: nanoid(),
    title: 'NodeJS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'Proficiency in Node.js, demonstrating expertise in asynchronous programming, event-driven architecture, package management, and server-side development.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: thirdProjectImage,
    url: 'https://react-longroads-app.netlify.app/',
    github: 'https://github.com/yatharth-97/react-longroads-app',
    title: 'Furniture Store',
    text: 'A React Frontend project that displays beautiful website of a Tours and Travels Company.',
  },
  {
    id: nanoid(),
    img: firstProjectImage,
    url: 'https://almabetter-quiz-app.netlify.app/',
    github: 'https://github.com/yatharth-97/quiz-alma-app',
    title: 'Quiz App',
    text: 'An app where users can build and play their own questions on a user-friendly quiz platform developed using React.js, Redux Toolkit, and Material UI design. It has responsive design, quiz generation, and an easy-to-use interface.',
  },
  {
    id: nanoid(),
    img: secondProjectImage,
    url: 'https://get-youtube-subscribers-alma.vercel.app/',
    github: 'https://github.com/yatharth-97/get-youtube-subscribers-alma',
    title: 'Get YouTube Subscribers API',
    text: 'The project involves us to construct a RESTful API to obtain YouTube Subscribers data for a Mongodb database. This project was built during my third module of Backend Development at AlmaBetter',
  },
];
