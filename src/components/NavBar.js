import { Outlet, Link } from 'react-router-dom';
// import { ImUser } from 'react-icons/im';
// import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>HarrietOteng</li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/works">WORK</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>
        {/* <div><ImUser /></div> */}
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
