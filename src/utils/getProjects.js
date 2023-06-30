import imagePreviewEmbeddings from '../assets/img/Projects/Embeddings/preview.png'
import image1Embeddings from '../assets/img/Projects/Embeddings/1.png'
import image2Embeddings from '../assets/img/Projects/Embeddings/2.png'
import image3Embeddings from '../assets/img/Projects/Embeddings/3.png'
import image4Embeddings from '../assets/img/Projects/Embeddings/4.png'

import imagePreviewGSS from '../assets/img/Projects/GSS/preview.png'
import image1GSS from '../assets/img/Projects/GSS/1.png'
import image2GSS from '../assets/img/Projects/GSS/2.png'
import image3GSS from '../assets/img/Projects/GSS/3.png'
import image4GSS from '../assets/img/Projects/GSS/4.png'
import image5GSS from '../assets/img/Projects/GSS/5.png'
import image6GSS from '../assets/img/Projects/GSS/6.png'
import image7GSS from '../assets/img/Projects/GSS/7.png'


import imageFlowerPreview from '../assets/img/Projects/Cvety/preview.png'
import imageFlower1 from '../assets/img/Projects/Cvety/1.png'
import imageFlower2 from '../assets/img/Projects/Cvety/2.png'
import imageFlower3 from '../assets/img/Projects/Cvety/3.png'
import imageFlower4 from '../assets/img/Projects/Cvety/4.png'

import imagePreviewBHome from '../assets/img/Projects/BHome/preview.png'
import image1BHome from '../assets/img/Projects/BHome/1.png'
import image2BHome from '../assets/img/Projects/BHome/2.png'
import image3BHome from '../assets/img/Projects/BHome/3.png'
import image4BHome from '../assets/img/Projects/BHome/4.png'

import imagePreviewWeatherToday from '../assets/img/Projects/WeatherToday/preview.png'
import image1WeatherToday from '../assets/img/Projects/WeatherToday/1.png'
import image2WeatherToday from '../assets/img/Projects/WeatherToday/2.png'

const visualization = {
  preview: imagePreviewEmbeddings,
  images: [image1Embeddings, image2Embeddings, image3Embeddings, image4Embeddings],
  name: "Data Visualization",
  link: "https://github.com/andrei-aleksanian/DataVisualization", 
  mainPar: "I worked as a full stack developer with a PhD student who required a demo website for their ML algorithms. I developed a server-client architecture to encapsulate and showcase the algorithms effectively. Despite their complex time complexities (O(n^2) and O(n^3)), I ensured a seamless user experience. By utilizing Docker, I divided the processes into microservices and handled everything from testing and documentation to CI/CD, DevOps, frontend, backend, and DB management. The entire project was built from scratch, demonstrating my self-taught expertise in full stack development.", 
  techStackPar: "React & Typescript | FastAPI & MySQL", 
  achievements: [
    "Built an effective solution, reducing the time space complexity of ML algorithms from O(n^2) and O(n^3) to O(1) (for the given use case of a demo).",
    "Tested the backend and frontend thoroughly. Close to 100% coverage in critical parts of the application.", 
    "Designed the architecture of 5 microservices. Orchestrated them neatly with Docker.", 
    "DevOps done from scratch. Achieved seamless CI/CD process with Docker and GitHub.", 
    "Ensured high code quality with unit tests, linters and commit hooks.", 
  ]
}

const gss = {
  preview: imagePreviewGSS,
  images: [image1GSS, image2GSS, image3GSS, image4GSS, image5GSS, image6GSS, image7GSS],
  name: "Feedback Tool",
  mainPar: "I had the opportunity to work on a feedback tool for the \"Great Science Share\" organization. It was a full-stack summer job in 2020, and I returned part-time in the winter of 2021 as a \"technical architect.\" The tool integrated with the Google Forms API and included an admin panel to manage surveys. I joined the project twice - first as a developer during its creation and later as a senior team member to fix bugs and add new features. It was a great learning experience that emphasized the importance of good documentation, code quality assurance, and testing. When I returned in 2021, I addressed the remaining issues and learned a lot from it.", 
  techStackPar: "React & Typescript | NodeJS(Express) & MySQL", 
  achievements: [
    "Built and tested a new system from the ground up in a team of 4.", 
    "Led a new team of 6 developers and acted as a mentor to less experienced team members (after the project was renewed 3 months later).",
    "Refactored large parts of the architecture and solved critical problems the system had at the time. E.g. working around some Google API limitations.", 
    "Controlled code quality with code reviews. Enforced best practices in Typescript and NodeJS. No \"any\" would sneak by!", 
  ]}

const flowerShop = {
  preview: imageFlowerPreview,
  images: [imageFlower1, imageFlower2, imageFlower3, imageFlower4],
  name: "Flower Shop",
  mainPar: "I completed my first practical full-stack application for a client, which was a significant learning experience for me. I discovered the importance of DevOps and Agile methodologies, realized why Waterfall is no longer favored, and gained insights into the limitations of JavaScript for production-ready software. Although I made some rookie mistakes, I made notable progress in requirements gathering, client communication, UX design, and strengthening my React skills.", 
  techStackPar: "React & Redux | NodeJS(Express) & MongoDB", 
  achievements: [
    "Built and deployed my first full-stack application.", 
    "Achieved a great user experience flow. The contact forms are split into many and validated neatly using my own components.",
    "Adopted Redux best practices to track users' shopping cart state and use it throughout the ordering process.",
    "Implemented limited admin tools features.", 
    "Made a lot of mistakes for my first time. This was a great project for finding out how not to do things!", 
  ]}

const bHome = {
  preview: imagePreviewBHome,
  images: [image1BHome, image2BHome, image3BHome, image4BHome],
  name: "Burger Assembler",
  link: "https://bhome-946b6.web.app/", 
  mainPar: "My first React App. It's fun! You can build a burger, register, order and view your orders. Implemented with serverless architecture on Firebase. I built this by following a course on Udemy, with very limited JS, HTML and CSS knowledge. It's far from perfect, but I think it's great for a first-ever app!", 
  techStackPar: "React & Redux | Firebase", 
  achievements: [
    "Started learning React.",
    "Learned more about CSS, HTML and JS.",
    "Implemented basic front-end authentication logic for the first time.",
    "Got taught how to use classes for React components and later realized why I shouldn't ever do that."
  ]
}

const weatherToday = {
  preview: imagePreviewWeatherToday,
  images: [image1WeatherToday, image2WeatherToday],
  name: "Weather Today",
  link: "https://weather-forecast-today.herokuapp.com/", 
  mainPar: "My first vanilla JS project. It's here for fun and to show how much I have grown since just Spring 2020. It's hard to believe that I started with something like this and am now building production-ready applications using countless techniques and best practices. Check out my latest project to get a good contrast!", 
  techStackPar: "Vanilla JS, HTML, CSS", 
  achievements: [
    "I used an API for the first time!",
    "Couldn't fix the CSS bug of numbers overflowing"
  ]
}

export default [visualization, gss, flowerShop]
