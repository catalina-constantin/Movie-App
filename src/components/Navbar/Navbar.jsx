import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="src/assets/logo.svg" alt="Movie App Logo" className="logo" />
            <ul id="navlinks" className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/watchlist">Watchlist</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;