
export const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\homeIcon.png" alt="home-icon"/></a>
                    <div className="navbar-tooltip">
                        <p>Home</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#ABOUT'><img src="src\assets\icons\aboutIcon.png" alt="about-icon"/></a>
                    <div className="navbar-tooltip">
                        <p>About</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#TECHS'><img src="src\assets\icons\skillsIcon.png" alt="projects-icon"/></a>
                    <div className="navbar-tooltip tooltip-techs">
                        <p>Technologies</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\projectsIcon.png" alt="experience-icon"/></a>
                    <div className="navbar-tooltip tooltip-experience">
                        <p>Experience</p>
                    </div>
                </li>
                <li className="navbar-button">
                    <a href='#'><img src="src\assets\icons\contactIcon.png" alt="contact-icon"/></a>
                    <div className="navbar-tooltip">
                        <p>Contact</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
