import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import metrics from '../images/Metrics.png';
import spaService from '../images/spa-services (1).png';
import exTrack from '../images/Extrack15deg.png';
import bookstore from '../images/bookstore.png';
import space from '../images/space-travellers-lighter.png';
import conference from '../images/Conference.png';
import todo from '../images/ToDo.png';
import '../styles/Works.css';

const projects = [
  {
    id: 4,
    name: 'BOOKSTORE',
    desc: 'Bookstore is a Single Page Application(SPA) website that displays a list of books and allows users to add or remove a selected book.',
    image: bookstore,
    techs: ['React', 'JavaScript', 'Redux', 'CSS', 'GitHub Pages'],
    live: 'https://newhoteng.github.io/Bookstore/',
    source: 'https://github.com/newhoteng/Bookstore',
  },
  {
    Id: 1,
    name: 'SPA SERVICES',
    desc: 'Spa Services is a web application that requires users to register an account and login. Users are then able to reserve a spa service and add a spa service of their choice',
    image: spaService,
    techs: ['React', 'Redux', 'Ruby on Rails', 'PostgreSQL'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 2,
    name: 'METRICS',
    desc: 'Metrics is a single-page-application built with react and redux. It fetches air quality data for selected cities from an API and displays the city names with their corresponding air quality index (aqi) on the homepage. Clicking on a city on the homepage directs users to a details page which lists the concentration of the various pollutants.',
    image: metrics,
    techs: ['React', 'Redux', 'React-Router', 'React-testing-library', 'Render'],
    live: 'https://metrics-59av.onrender.com/',
    source: 'https://github.com/newhoteng/Metrics',
  },
  {
    id: 3,
    name: 'EXTRACK',
    desc: 'Extrack is an expense tracking app that allows users to make transactions associated with one or more categories and view total transactions for each category.',
    image: exTrack,
    techs: ['Ruby on Rails', 'Devise Gem', 'PostgreSQL', 'HTML', 'CSS', 'Render'],
    live: 'https://extrack.onrender.com',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 5,
    name: 'SPACE TRAVELERS\' HUB',
    desc: 'A web application that allow users to book rockets and join selected space missions.',
    image: space,
    techs: ['React', 'Redux', 'React-Router', 'React-testing-library', 'Render'],
    live: 'https://space-travelers-hub-36vw.onrender.com/',
    source: 'https://github.com/newhoteng/Space-travelers-hub',
  },
  {
    id: 6,
    name: 'CONFERENCE',
    desc: 'This project creates a webpage(home and about page) for a fictional Engineer\'s Conference. It is based on a design by Cindy Shin in Behance',
    image: conference,
    techs: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    live: 'https://newhoteng.github.io/Capstone-1/',
    source: 'https://github.com/newhoteng/Capstone-1',
  },
  {
    id: 7,
    name: 'TO-DO-LIST',
    desc: 'A simple "To-do list" app that allows users to add, check off, and delete daily tasks. It is built with HTML, CSS, JavaScript and packaged using webpack',
    image: todo,
    techs: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'GitHub Pages'],
    live: 'https://newhoteng.github.io/To-do-list/',
    source: 'https://github.com/newhoteng/To-do-list',
  },
];

function Works() {
  return (
    <div className="works-cont">
      <h1>FEATURED PROJECTS</h1>
      <div className="projects-cont">
        {projects.map((project) => (
          <div key={project.id} className="project-cont">
            <img src={project.image} alt="Screenshot of project" />
            <div className="text-cont">
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div className="buttons-cont">
                {project.techs.map((tech) => (
                  <button key={tech} type="button">{tech}</button>
                ))}
              </div>
              <div className="links-cont">
                {project.live && (
                  <a className="link" href={project.live} target="_blank" rel="noreferrer">
                    <FiArrowUpRight />
                    site
                  </a>
                )}
                <a className="link" href={project.source} target="_blank" rel="noreferrer">
                  <FiArrowUpRight />
                  code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
