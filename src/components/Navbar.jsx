import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
  return (
    <>
      <header className="site-header" style={{ color: 'black' }}>
        <div className="wrapper site-header__wrapper">
          <h1 className="brand"><Link to="/" style={{ textDecoration: 'none' }}>MATH MAGICIANS</Link></h1>
          <nav className="nav">
            {/* <button className="nav__toggle" aria-expanded="false" type="button">
              menu
            </button> */}
            <GiHamburgerMenu className="nav__toggle" aria-expanded="false" />
            <ul className="nav__wrapper">
              <li className="nav__item">
                <Link to="/" style={{ textDecoration: 'none' }} id="homepage">Home</Link>
              </li>

              <li className="nav__item">
                <Link to="/Calculator" style={{ textDecoration: 'none' }}>Calculator</Link>
              </li>
              <li className="nav__item">
                <Link to="/Quote" style={{ textDecoration: 'none' }}>Quote</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Navbar;
