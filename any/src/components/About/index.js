import React from "react";
import Nav from "../Nav";

function About() {
    return (
        <>
        <Nav />
        <section className="aboutMe" id="about">
            <div className="about-div">
                <h1 className="about-text">Meet Joe</h1>
            </div>
            <div>
                <img className="about-img" alt="family" src={require('../../assets/images/Misc/Joe-familia.jpg')}></img>
            </div>
            <div className="about-div">
                <article className="about-text">
                    <p className="about-p">
                    Welcome to Any & Everything Photography!
                    <br/>
                    A little about me:
                    <br/>
                    I started out over a decade ago in photography as a hobby.
                    I loved to take pictures of cars, jets, nature and anything I thought was fun. 
                    As I started to learn more into photography I decided to test the waters taking pictures of family members to see how I could do in portraits. 
                    Around 2016 I branched out even more and was doing family photos, senior pictures and even weddings for Friends and Family. 
                    Fast Forward to the present, I still look at Photography as a passion and a hobby but one that I feel I can share with my community. 
                    I want to help with Any & Every Photography need you have, Family Portraits, Weddings, Senior Photos, Cars, Planes, Events etc.
                    <br/>
                    For Any & Every Photography need, please reach out and I would love to earn your business!
                    </p>
                </article>
            </div>
        </section>
        </>
    )
}

export default About