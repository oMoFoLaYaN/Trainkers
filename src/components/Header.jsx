import { Outlet, Link } from "react-router-dom";

const Header = () => {
return (
        <header className="l-header" id="header">
        <nav className="nav bd-grid">

            <div className="nav__toggle" id="nav-toggle">
                <i className="bx bxs-grid"></i>
            </div>

            <a href="#" className="nav__logo">Train<span>kers</span></a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">

                <li className="nav__item">
                <Link to={`/`} className="nav__link active">Home</Link>
                    </li>
                    <li className="nav__item">
                        <a href="#featured" className="nav__link">Featured</a>
                    </li>

                    <li className="nav__item">
                        <a href="#women" className="nav__link">Women</a>
                    </li>

                    <li className="nav__item">
                        <a href="#new" className="nav__link">New</a>
                    </li>

                    <li className="nav__item">
                        <Link to={`/shop`} className="nav__link">Shop</Link>
                    </li>

                </ul>
            </div>

            <div className="nav__shop">
                <i className="bx bx-shopping-bag"></i>
            </div>
        </nav>
    </header>
    )
  }
  
  export default Header
  