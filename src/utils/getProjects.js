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
  mainPar: "A summer job I had with a PhD student who needed a demo website for their ML algorithms. I took the algorithms and wrapped them in a server-client architecture. Achieved very seamless user experience considering the algorithms' complexity is O(n^2) and O(n^3). Split the processes into different microservices and orchestrated everything using Docker. Not to mention tests, docs, CI/CD, DevOps, frontend, backend, DB management... all done from scratch!", 
  techStackPar: "React & Typescript | FastAPI & MySQL", 
  achievements: [
    "Achieved seamless user experience with smart state management, meticulous error handling and fast backend.",
    "Well tested backend and frontend. Close to 100% coverage in critical parts of the application.", 
    "Designed the architecture of 5 microservices. Orchestrated neatly with Docker.", 
    "DevOps done from scratch. Achieved seamless CI/CD process with Docker and GitHub.", 
  ]
}

const gss = {
  preview: imagePreviewGSS,
  images: [image1GSS, image2GSS, image3GSS, image4GSS, image5GSS, image6GSS, image7GSS],
  name: "Feedback Tool",
  mainPar: "A feedback tool for \"Great Science Share\". Full-stack summer job from 2020 followed by a part-time return in 2021 winter as a technical architect. Features integration with Google Forms API and an admin panel to manage all the ongoing surveys. I joined this project twice - once as a developer when we created it and then I came back as a senior to lead a new team to fix bugs and add new features. This has really been a great experience that opened my eyes to why we need good documentation, code QA and tests. When I came back to it in 2021 I had to fix all the problems we had left and learned a lot from it!", 
  techStackPar: "React & Typescript | NodeJS(Express) & MySQL", 
  achievements: [
    "Built and tested a new system from the ground up in a team of 4.", 
    "Led a new team of 6 developers and acted as a mentor to less experienced team members (after the project was renewed 3 months later).",
    "Refactored large parts of the architecture and solved critical problems the system had at the time. E.g. working around some Google API limitations.", 
    "Controlled code quality with code reviews. Enforced best practices in Typescript and NodeJS. No \"any\" would sneak by!", 
    "Deployed the application online. Went through a rough last-minute deployment day of fixing major bugs that occurred in production.", 
  ]}

const flowerShop = {
  preview: imageFlowerPreview,
  images: [imageFlower1, imageFlower2, imageFlower3, imageFlower4],
  name: "Flower Shop",
  mainPar: "A full-stack application built by me for a client in Russia. Includes a fully manageable database with an admin panel and is focused on delivering a great user experience. Unfortunately, I couldn't maintain this project for the client and they moved on with another solution. However, the experience doesn't go anywhere and the project is still available for viewing! (It's on a free server, so please give it a minute to load.)", 
  techStackPar: "React & Redux | NodeJS(Express) & MongoDB", 
  achievements: [
    "Built and deployed the first full-stack application.", 
    "Achieved a great user experience flow. The contact forms are split into many and validated neatly using my own components.",
    "Adopted Redux best practices to track users' shopping cart state and use it throughout the ordering process.",
    "Implemented limited admin tools features.", 
    "Made a lot of mistakes for the first time. This was a great project for finding out how to Not do things!", 
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
