import React from "react";
import { TypeAnimation } from 'react-type-animation';


function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
      <section>
        <header className="home-header">
          <div class="container">
            <div className="home-header-text">
              <h1>Any & Everything</h1>
              <h3>Photography</h3>
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
          </nav> */}
        </div>
      </section>
    );
}

export default Header