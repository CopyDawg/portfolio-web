
export const HomeView = () => {
    return (
        <div className="container">
            <div className="home-view">
                <div className="home-main">
                    
                    <p>Hi! my name is</p>
                    <h2>Omar Villanueva</h2>
                    <p className="summary">I'm a software developer, I desing and code elegant and efficient web applications.</p>
                    <button>Check Resume <img src="src\assets\icons\next.png"/></button>
                    
                </div>
            </div>
            <div className="about-view">
                <div className="about-main">
                    <img src="src\assets\PORTRAIT.png"/>
                    <div className="about-text">
                        <h2>About me</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem a blanditiis obcaecati atque totam maxime illo corporis tempore enim laborum dolores soluta, debitis vero animi beatae sed porro ullam voluptate voluptatem dolorum! Libero magnam ullam veritatis minus dignissimos, impedit iusto vero id exercitationem quod voluptatum neque perspiciatis corrupti inventore?
                        </p>
                        <ul>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                            <li>Lorem ipsum dolor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
