import React from "react";
import Nav from "../Nav";

function About() {
    return (
        <>
        <Nav />
        <section className="aboutMe" id="about">
            <h1 className="about-text">Meet Joe</h1>
            <div>
                <img className="about-img" alt="family" src={require('../../assets/images/Misc/Joe-familia.jpg')}></img>
            </div>
            <div>
                <article>
                    <p className="about-p">
                        Something about Joe and why he takes pics...He's an Ok guy....he takes semi-decent pics ❤️
                    </p>
                </article>
            </div>
        </section>
        </>
    )
}

export default About