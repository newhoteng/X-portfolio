import { useState, useEffect } from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import '../styles/Nav.css';

function NavBar() {
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNavClick = () => {
    if (window.innerWidth <= 767) {
      setMenuClass('menu hidden');
      setBurgerClass('burgerBar unclicked');
    } else {
      setMenuClass('menu');
    }
  };

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burgerBar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burgerBar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setMenuClass('menu hidden');
    } else {
      setMenuClass('menu');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#6070ff' : '#626b88',
  });

  return (
    <>
      <nav>
        <Link to="/"><div className="nameLogo">Harriet Oteng</div></Link>
        <div className="burger-menu" onClick={updateMenu} role="presentation">
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
        <div className={menuClass}>
          <ul>
            <li><NavLink style={navLinkStyles} onClick={handleNavClick} to="/">HOME</NavLink></li>
            <li><NavLink style={navLinkStyles} onClick={handleNavClick} to="/works">WORK</NavLink></li>
            <li><NavLink style={navLinkStyles} onClick={handleNavClick} to="/about">ABOUT</NavLink></li>
            <li><NavLink style={navLinkStyles} onClick={handleNavClick} to="/contact">CONTACT</NavLink></li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
