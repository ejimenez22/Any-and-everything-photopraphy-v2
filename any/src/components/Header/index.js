import React from "react";


function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props

    return (
      <section>
        <header></header>
        <h1> Any & Everything Photography </h1>
        <div>
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
        </div>
      </section>
    );
}

export default Header