import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/characters">Characters</Link>
                    </li>
                    <li>
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to="/episodes">Episodes</Link>
                    </li>
                </ul>
            </nav>
            <h1>Rick and Morty Database</h1>
        </header>
    )
}

export default Header