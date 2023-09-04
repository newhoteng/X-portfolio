import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CgTikcode } from 'react-icons/cg';

// import { ImUser } from 'react-icons/im'; , Link
import '../styles/Nav.css';

function NavBar() {
  const [burgerClass, setBurgerClass] = useState('burgerBar unclicked');
  const [menuClass, setMenuClass] = useState('menu visible');
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
        <div><CgTikcode /></div>
        <div className="burger-menu" onClick={updateMenu} role="presentation">
          <div className={burgerClass} />
          <div className={burgerClass} />
          <div className={burgerClass} />
        </div>
      </nav>
      <div className={menuClass}>
        <div>
          <p><Link onClick={handleNavClick} to="/">HOME</Link></p>
          <p><Link onClick={handleNavClick} to="/works">WORK</Link></p>
          <p><Link onClick={handleNavClick} to="/about">ABOUT</Link></p>
          <p><Link onClick={handleNavClick} to="/contact">CONTACT</Link></p>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
