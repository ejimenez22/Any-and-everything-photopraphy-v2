import React from "react"
import headerimg from "../../assets/images/header-img/Drawing-3.png"


function Header(props) {


    return (
      <section>
        <header className="home-header">
          <div className="">
            <img className="home-header-img" src={headerimg} alt='header'></img>
          </div>
        </header>
        
                 
    </section>
    );
}

export default Header