import React from "react";
import Nav from "../Nav";
import Photolist from "../Photos";

function Portfolio(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props
    return (
        <>
        <Nav />
        <div className="container">
            <h1 className="port-text">My Work</h1>
            {
        <div>
          <nav>
            <ul>
            {categories.map((category) => (
                <ul
                  className={`mx-1 ${currentCategory.name === category.name && "navActive"}`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                  >
                    {category.name}
                  </span>
                </ul>
              ))}
            </ul>
          </nav> 
        </div>
        }   
        </div>

        <div className="box">
        <div className="portfolio-photos">
            <section>
                <Photolist className="portfolio-img green-img" category={currentCategory.name} />
            </section>
            </div>
            </div>
        </>
    )
}

export default Portfolio