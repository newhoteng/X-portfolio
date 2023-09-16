import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Nav.css';

function NavBar() {
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
  const [menuClass, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleNavClick = () => {
    setMenuClass('menu hidden');
    setBurgerClass('burgerBar unclicked');
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

  return (
    <>
      <nav>
        <div className="nameLogo">Harriet Oteng</div>
        <div className="burger-menu" onClick={updateMenu} role="presentation">
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <ul>
          <li><Link onClick={handleNavClick} to="/">HOME</Link></li>
          <li><Link onClick={handleNavClick} to="/works">WORK</Link></li>
          <li><Link onClick={handleNavClick} to="/about">ABOUT</Link></li>
          <li><Link onClick={handleNavClick} to="/contact">CONTACT</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
