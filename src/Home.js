import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="./ASU_Wallpaper.jpg"
          alt="Hero_Image"
        />
        <div className="home__row">
          {/* Products Line 1 */}
          <Product
            universityName="Arizona State University"
            universityLink="https://www.bkstr.com/arizonastatestore/home"
            id="12321341"
            title="Arizona State Sun Devils Adidas Gold/Maroon  Ultraboost 1.0 Running Shoe"
            price={69.49}
            rating={5}
            image="./ASU_Shoes.jpg"
          />
          <Product
            universityName="Penn State University"
            universityLink="https://shop.gopsusports.com/"
            id="23445930"
            title="Penn State Nittany Lions 50oz. Coach Insulated Tumbler Mug"
            price={44.99}
            rating={4}
            image="./PSU_Bottel.jpg"
          />
          <Product
            universityName="University of Florida"
            universityLink="https://www.bkstr.com/floridastore/home"
            id="4903850"
            title="Nike - University of Florida Gators Essential Short Sleeve T-Shirt, 100% Cotton, Screen Printed"
            price={24.99}
            rating={4}
            image="./UOF_Cap.jpg"
          />
          <Product
            universityName="New York University"
            universityLink="https://www.bkstr.com/nyustore/home"
            id="49538094"
            title="New York University Heavy Weight Crewneck Gray Sweatshirt"
            price={67.99}
            rating={5}
            image="./NYU_Sweatshirt.jpeg"
          />
          <Product
            universityName="University of Texas"
            universityLink="https://shop.texassports.com/"
            id="3254354345"
            title="Youth Nike Texas Orange Texas Longhorns Custom Football Game Jersey"
            price={40.99}
            rating={4}
            image="./UOT_Tshirt.jpg"
          />
          <Product
            universityName="Louisiana State University"
            universityLink="https://www.lsushop.net/"
            id="90829332"
            title="Men's Colosseum Purple LSU Tigers Double Arch Pullover Hoodie"
            price={59.99}
            rating={4}
            image="./LSU_Tshirt.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
