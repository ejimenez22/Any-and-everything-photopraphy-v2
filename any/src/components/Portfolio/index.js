import React from "react";
import Nav from "../Nav";
import Photolist from "../Photos";

import airshow1 from '../../assets/images/Airshow/0.jpg'
import airshow2 from '../../assets/images/Airshow/1.jpg'
import airshow3 from '../../assets/images/Airshow/2.jpg'

function Portfolio(props) {
    const {currentCategory} = props

    return (
        <>
        <Nav />
        <div>
            <h1>My Work</h1>
        </div>

        <div className="portfolio-photos">
            <img src='./'
        </div>


        {/*
        <section>
            <Photolist category={currentCategory.name} />
        </section>
        */}
        </>
    )
}

export default Portfolio