import React from "react";
import Nav from "../Nav";
import Photolist from "../Photos";

/* import gallery photos 
import airshow1 from '../../assets/images/Airshow/0.jpg'
import airshow2 from '../../assets/images/Airshow/1.jpg'
import airshow3 from '../../assets/images/Airshow/2.jpg'
import xmas1 from '../../assets/images/Christmas/0.jpg'
import xmas2 from '../../assets/images/Christmas/1.jpg'
import concert1 from '../../assets/images/Concert/0.jpg'
import landscape1 from '../../assets/images/Landscape/0.jpg'
import landscape2 from '../../assets/images/Landscape/1.jpg'
import landscape3 from '../../assets/images/Landscape/2.jpg'
import landscape4 from '../../assets/images/Landscape/3.jpg'
import landscape5 from '../../assets/images/Landscape/4.jpg'
import landscape6 from '../../assets/images/Landscape/5.jpg'
import portrait1 from '../../assets/images/Portraits/0.jpg'
import portrait2 from '../../assets/images/Portraits/1.jpg'
import portrait3 from '../../assets/images/Portraits/2.jpg'
import portrait4 from '../../assets/images/Portraits/3.jpg'
import portrait5 from '../../assets/images/Portraits/4.jpg'
import portrait6 from '../../assets/images/Portraits/5.jpg'
import portrait7 from '../../assets/images/Portraits/6.jpg'
import portrait8 from '../../assets/images/Portraits/7.jpg'
import portrait9 from '../../assets/images/Portraits/8.jpg'
import portrait10 from '../../assets/images/Portraits/9.jpg'
import portrait11 from '../../assets/images/Portraits/10.jpg'
import portrait12 from '../../assets/images/Portraits/11.jpg'
import portrait13 from '../../assets/images/Portraits/12.jpg'
import portrait14 from '../../assets/images/Portraits/13.jpg'
import portrait15 from '../../assets/images/Portraits/14.jpg'
import portrait16 from '../../assets/images/Portraits/15.jpg'
import portrait17 from '../../assets/images/Portraits/16.jpg'
import portrait18 from '../../assets/images/Portraits/17.jpg'
import portrait19 from '../../assets/images/Portraits/18.jpg'
import portrait20 from '../../assets/images/Portraits/19.jpg'
import portrait21 from '../../assets/images/Portraits/20.jpg'
import portrait22 from '../../assets/images/Portraits/21.jpg'
import portrait23 from '../../assets/images/Portraits/22.jpg'
import portrait24 from '../../assets/images/Portraits/23.jpg'
import portrait25 from '../../assets/images/Portraits/24.jpg'
import portrait26 from '../../assets/images/Portraits/25.jpg'
import portrait27 from '../../assets/images/Portraits/26.jpg'
import racing1 from '../../assets/images/Racing/0.jpg'
import racing2 from '../../assets/images/Racing/1.jpg'
import racing3 from '../../assets/images/Racing/2.jpg'
import racing4 from '../../assets/images/Racing/3.jpg'
import racing5 from '../../assets/images/Racing/4.jpg'
import racing6 from '../../assets/images/Racing/5.jpg'
import racing7 from '../../assets/images/Racing/6.jpg'
import racing8 from '../../assets/images/Racing/7.jpg'
import racing9 from '../../assets/images/Racing/8.jpg'
import racing10 from '../../assets/images/Racing/9.jpg'
import racing11 from '../../assets/images/Racing/10.jpg'
import racing12 from '../../assets/images/Racing/11.jpg'
import racing13 from '../../assets/images/Racing/12.jpg'
import racing14 from '../../assets/images/Racing/13.jpg'
import racing15 from '../../assets/images/Racing/14.jpg'
import recreation1 from '../../assets/images/Recreation/0.jpg'
import softball1 from '../../assets/images/Softball/0.jpg'
import softball2 from '../../assets/images/Softball/1.jpg'
import softball3 from '../../assets/images/Softball/2.jpg'
import Photolist from "../Photos";
*/

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