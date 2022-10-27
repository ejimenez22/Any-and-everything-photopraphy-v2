import React from "react";
import Nav from "../Nav";
import Photolist from "../Photos";

/* import gallery photos */
import airshow1 from '../../assets/images/Airshow/0.jpg'
import airshow2 from '../../assets/images/Airshow/1.jpg'
import airshow3 from '../../assets/images/Airshow/2.jpg'
import christmas1 from '../../assets/images/Christmas/0.jpg'
import christmas2 from '../../assets/images/Christmas/1.jpg'
import concert from '../../assets/images/Concert/0.jpg'


function Portfolio(props) {
    const {currentCategory} = props

    return (
        <>
        <Nav />
        <div>
            <h1>My Work</h1>
        </div>

        <div className="portfolio-photos">
            <img src={airshow1} alt="airshow" width="20%" height="20%"></img>
            
            <img src={airshow2} alt="airshow" width="20%" height="20%"></img>

            <img src={airshow3} alt="airshow" width="20%" height="20%"></img>

            <img src={christmas1} alt="christmas photo" width="20%" height="20%"></img>

            <img src={christmas2} alt="family christmas photo" width="20%" height="20%"></img>

            <img src={concert} alt="concert" width="20%" height="20%"></img>
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