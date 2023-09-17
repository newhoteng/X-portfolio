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
    desc: 'A web application where users can add and remove books. The homepage displays a list of all added books. Data is stored and fetched from API endpoints.',
    image: bookstore,
    techs: ['React', 'Redux', 'JavaScript', 'React-Router', 'API', 'CSS', 'GitHub Pages'],
    live: 'https://newhoteng.github.io/Bookstore/',
    source: 'https://github.com/newhoteng/Bookstore',
  },
  {
    id: 2,
    name: 'METRICS',
    desc: 'A web app that fetches and displays air quality data for selected cities from an API. A click on a city on the homepage directs to the details page that lists the concentration of the various pollutants. It has a color indicator feature that shows an air icon in a different color based on the current air quality index.',
    image: metrics,
    techs: ['React', 'Redux', 'JavaScript', 'React-Router', 'API', 'CSS', 'React Testing Library', 'Render'],
    live: 'https://metrics-59av.onrender.com/',
    source: 'https://github.com/newhoteng/Metrics',
  },
  {
    id: 3,
    name: 'EXTRACK',
    desc: 'A full-stack expense tracking app that requires users to be registered and logged in to use its features. Users will first have to create one or more “categories” then they can add expenses that are associated with one or more categories. The app also shows the total expenses for each category.',
    image: exTrack,
    techs: ['Ruby on Rails', 'Devise Gem', 'PostgreSQL', 'HTML', 'CSS', 'RSpec', 'Render'],
    live: 'https://extrack.onrender.com',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 5,
    name: 'SPACE TRAVELERS\' HUB',
    desc: 'This implementation pulls Rockets, Missions and Dragons data from an API and displays them on separate pages. Each Rocket, Mission and Dragon item feature a button that allows visitors to reserve or join. The profile page displays a list of joined or reserved Rockets, Mission and Dragons. This project was created in collaboration with 2 other developers through remote-pair-programming.',
    image: space,
    techs: ['React', 'Redux', 'JavaScript', 'React-Router', 'API', 'CSS', 'React Testing Library', 'Render'],
    live: 'https://space-travelers-hub-36vw.onrender.com/',
    source: 'https://github.com/newhoteng/Space-travelers-hub',
  },
  {
    Id: 1,
    name: 'SPA SERVICES',
    desc: 'A full-stack “reservation” web application that requires users to be registered and logged in to use. Visitors to the website are able to make reservations for spa services. It features a homepage that displays all available services, a details page that provide details on selected service. Users can play around with adding their own service and making a service unavailable via the delete page. This project was created in collaboration with 3 other developers through remote-pair-programming.',
    image: spaService,
    techs: ['React', 'Redux', 'JavaScript', 'Ruby on Rails', 'Devise Gem', 'PostgreSQL', 'CSS'],
    live: '',
    source: 'https://github.com/newhoteng/spa-booking-frontend',
  },
  {
    id: 6,
    name: 'CONFERENCE',
    desc: 'A web application for a fictional Engineer’s Conference that provides relevant information to attendees and would be attendees alike. It features a home and about page.',
    image: conference,
    techs: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    live: 'https://newhoteng.github.io/Capstone-1/',
    source: 'https://github.com/newhoteng/Capstone-1',
  },
  {
    id: 7,
    name: 'TO-DO-LIST',
    desc: 'A ‘To-do list’ app that allows users to add, check off, and delete daily tasks. It also has a drag and drop feature that facilitates the re-ordering of tasks.',
    image: todo,
    techs: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Jest', 'GitHub Pages'],
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
                    visit site
                  </a>
                )}
                <a className="link" href={project.source} target="_blank" rel="noreferrer">
                  <FiArrowUpRight />
                  see code
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
