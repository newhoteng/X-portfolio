import React from 'react';
import metrics from '../images/Metrics.png';

const projects = [
  {
    id: 1,
    name: 'Spa Services',
    desc: 'Spa Services is a web application that requires users to register an account and login. Users are then able to reserve a spa service and add a spa service of their choice',
    image: '../images/Metrics.png',
    tech: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 2,
    name: 'Metrics',
    desc: 'Metrics is a single-page-application built with react and redux. It fetches air quality data for selected cities from an API and displays the cities with their corresponding air quality index (aqi) on the homepage. Clicking on a city on the homepage directs users to a details page which lists the concentration of the various pollutants.',
    image: { metrics },
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'https://metrics-59av.onrender.com/',
    source: 'https://github.com/newhoteng/Metrics',
  },
  {
    id: 3,
    name: 'exTrack',
    desc: 'Pending',
    image: 'project-images/SpaServices.png',
    tech: ['Ruby on Rails', 'Devise Gem', 'PostgreSQL', 'HTML', 'CSS'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 4,
    name: 'Bookstore',
    desc: 'Bookstore is a Single Page Application(SPA) website that displays a list of books and allows users to add or remove a selected book.',
    image: 'project-images/Bookstore.png',
    tech: ['React', 'JavaScript', 'Redux', 'CSS'],
    live: 'https://newhoteng.github.io/Bookstore/',
    source: 'https://github.com/newhoteng/Bookstore',
  },
  {
    id: 5,
    name: 'Space Travelers\' Hub',
    desc: 'A web application that allow users to book rockets and join selected space missions.',
    image: 'project-images/SpaceTravelers.png',
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'https://space-travelers-hub-36vw.onrender.com/',
    source: 'https://github.com/newhoteng/Space-travelers-hub',
  },
  {
    id: 6,
    name: 'Engineer\'s Conference',
    desc: 'This project creates a webpage(home and about page) for a fictional Engineer\'s Conference. It is based on a design by Cindy Shin in Behance',
    image: 'project-images/Conference.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://newhoteng.github.io/Capstone-1/',
    source: 'https://github.com/newhoteng/Capstone-1',
  },
  {
    id: 7,
    name: 'To-Do-List',
    desc: 'A simple "To-do list" app that allows users to add, check off, and delete daily tasks. It is built with HTML, CSS, JavaScript and packaged using webpack',
    image: 'project-images/To-Do.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://newhoteng.github.io/To-do-list/',
    source: 'https://github.com/newhoteng/To-do-list',
  },
];

function Works() {
  return (
    <div>
      <h1>FEATURED PROJECTS</h1>
      {projects.map((project) => (
        <div key={project.id}>
          <img src={project.image} alt="Screenshot of project" />
        </div>
      ))}
    </div>
  );
}

export default Works;
