import React from "react";
import Nav from "../Nav";
import Photolist from "../Photos";

function Portfolio(props) {
    const {currentCategory} = props

    return (
        <>
        <Nav />
        <div>
            <h1>My Work</h1>
        </div>
        <section>
            <Photolist category={currentCategory.name} />
        </section>
        </>
    )
}

export default Portfolio