
export const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\homeIcon.png"/></a>
                    <div className="navbar-tooltip">
                        <p>Home</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\aboutIcon.png"/></a>
                    <div className="navbar-tooltip">
                        <p>About</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\skillsIcon.png"/></a>
                    <div className="navbar-tooltip">
                        <p>Projects</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\projectsIcon.png"/></a>
                    <div className="navbar-tooltip tooltip-experience">
                        <p>Experience</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\contactIcon.png"/></a>
                    <div className="navbar-tooltip">
                        <p>Contact</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
