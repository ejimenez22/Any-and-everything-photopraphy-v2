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
        <header></header>
        <h1> Any & Everything Photography </h1>
        <TypeAnimation
          sequence={[
            'Bringing you photos of Airshows...',
            1000,
            'Bringing you photos of Landscapes...',
            1000,
            'Bringing you photos of Concerts...', 
            1000,
            'Bringing you photos of Portraits...',
            1000,
            'Bringing you photos of Racing...',
            1000,
            'Bringing you photos of Softball...', 
            1000,
            () => {
              console.log('Done typing!');
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1.5em' }}
        />
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