import React from 'react';

const projects = [
  {
    name: 'Engineer\'s Conference',
    desc: 'This project creates a webpage(home and about page) for a fictional Engineer\'s Conference. It is based on a design by Cindy Shin in Behance',
    image: 'project-images/Conference.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://newhoteng.github.io/Capstone-1/',
    source: 'https://github.com/newhoteng/Capstone-1',
  },
  {
    name: 'To-Do-List',
    desc: 'A simple "To-do list" app that allows users to add, check off, and delete daily tasks. It is built with HTML, CSS, JavaScript and packaged using webpack',
    image: 'project-images/To-Do.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://newhoteng.github.io/To-do-list/',
    source: 'https://github.com/newhoteng/To-do-list',
  },
  {
    name: 'Bookstore',
    desc: 'Bookstore is a Single Page Application(SPA) website that displays a list of books and allows users to add or remove a selected book.',
    image: 'project-images/Bookstore.png',
    tech: ['React', 'JSX', 'Redux', 'CSS', 'SPA'],
    live: 'https://newhoteng.github.io/Bookstore/',
    source: 'https://github.com/newhoteng/Bookstore',
  },
  {
    name: 'Space Travelers\' Hub',
    desc: 'A web application that allow users to book rockets and join selected space missions.',
    image: 'project-images/SpaceTravelers.png',
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'https://space-travelers-hub-36vw.onrender.com/',
    source: 'https://github.com/newhoteng/Space-travelers-hub',
  },
  {
    name: 'Metrics',
    desc: 'Metrics is a single-page-application built with react and redux. It fetches air quality data for selected cities from an API and displays the cities with their corresponding air quality index (aqi) on the homepage. Clicking on a city on the homepage directs users to a details page which lists the concentration of the various pollutants.',
    image: 'project-images/Metrics.png',
    tech: ['React', 'Redux', 'React-Router', 'React-testing-library'],
    live: 'https://metrics-59av.onrender.com/',
    source: 'https://github.com/newhoteng/Metrics',
  },
  {
    name: 'Spa Services',
    desc: 'Spa Services is a web application that requires users to register an account and login. Users are then able to reserve a spa service and add a spa service of their choice',
    image: 'project-images/SpaServices.png',
    tech: ['React', 'Ruby on Rails', 'Redux', 'React-Router'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
];

function Works() {
  return (
    <h1>This is the works page</h1>
  );
}

export default Works;
