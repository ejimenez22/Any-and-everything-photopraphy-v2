import React from "react"
import headerimg from "../../assets/images/header-img/Drawing.png"


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
            <div className="">
              <img className="home-header-img" src={headerimg}></img>
            </div>
          </div>
        </header>
      </section>
    );
}

export default Header