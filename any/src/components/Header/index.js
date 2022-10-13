import React from "react"
import headerimg from "../../assets/images/header-img/Drawing-3.png"
import { NavLink } from "react-router-dom";


function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
      <section>
        <header className="home-header">
          <div className="">
            <div className="nav-text">
                <img className="home-header-img" src={headerimg}></img>
            </div>
          </div>
        </header>
        
        <div>
          {/* 
          <nav>
            <ul>
            {categories.map((category) => (
                <li
                  className={`mx-1 ${currentCategory.name === category.name && "navActive"}`}
                  key={category.name}
                >
                  <span
                    onClick={() => {
                      setCurrentCategory(category);
                    }}
                  >
                    {category.name + " • "}
                  </span>
                </li>
              ))}
            </ul>
          </nav> 
          */}
        </div>
    </section>
    );
}

export default Header