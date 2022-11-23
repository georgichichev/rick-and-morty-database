import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link
                            to="/characters"
                            className="nav__link"
                        >
                            Characters
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/locations"
                            className="nav__link"
                        >
                            Locations
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link
                            to="/episodes"
                            className="nav__link"
                        >
                            Episodes
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header