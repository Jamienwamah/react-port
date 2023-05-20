function Main() {
    return (
        <div className="wrapper">

    <div className="main-container">
        <div className="container-one">
            <div className="profile">
                <img src="../assets/profile.png" alt="" />
                <h3>Ikechukwu Nwamah<v-avatar color="primary" rounded="" size={25}>IN</v-avatar>
                </h3>
                <p>Software Developer</p>
            </div>
            <div className="social-links">
                <div className="link">
                    <a href="https://www.github.com/oishbdh" target="blank">
                        <img src="../assets/github.png" alt="" />
                        <h2>GitHub</h2>
                    </a>
                </div>

                <div className="link">
                    <a href="https://www.linkedin.com/in/ikechukwu-n-70890921a">
                        <img src="../assets/linkedin.png" alt="" />
                        <h2>LinkedIn</h2>
                    </a>
                </div>
                <div className="link">
                    <a href="https://www.facebook.com/iknwamah">
                        <img src="../assets/fb.png" alt="" />
                        <h2>Facebook</h2>
                    </a>
                </div>
            </div>

            <div className="container-two">
                <div className="about-me">
                    <h1>About Me</h1>
                    <p>
                        I am Ikechukwu Nwamah. I graduated as a Mechanical Engineer,
                        before I began my career as a programmer. I started out as a
                        self-taught developer until I got a scholarship into a
                        professional training alx_africa which is affiliated with
                        "Holberton School of Computer Science". I would say, being a
                        software engineer hasn't been easy, but through out the extent I
                        have gone. I declare it has been worth the journey, because
                        programs changes everything. The world is fast advancing to the
                        path of technology
                    </p>
                </div>
                <div className="technology-section">
                    <h1>Technologies Studied</h1>
                    <div className="logo">
                        <img src="../assets/html.png" alt="" />
                        <img src="../assets/css.png" alt="" />
                        <img src="../assets/js.png" alt="" />
                        <img src="../assets/dj.png" alt="" />
                        <img src="../assets/jyn.png" alt="" />
                        <img src="../assets/py.png" alt="" />
                        <img src="../assets/sql.png" alt="" />
                        <img src="../assets/vue.png" alt="" />
                        <img src="../assets/asp.png" alt="" />
                    </div>
                </div>
                <div className="button-container">
                    <div className="projects-button">
                        <a href="https://github.com/oishbdh/alx-low_level_programming.git">My Projects</a>
                    </div>
                    <div>
                        <div className="projects-button">
                            <a href="https://eu.docworkspace.com/d/sAKvKXI2ei_ugAZT4v5OupxQ">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    );
}
export default Main;