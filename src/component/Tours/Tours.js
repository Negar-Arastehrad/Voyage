import React from "react";
import "./ToursStyle.css";

import img1 from '../../img/pic1.JPG';
import img2 from '../../img/pic4.JPG';
import img3 from '../../img/pic5.JPG';
import img4 from '../../img/pic2.JPG';


const Tours = () => {
  return (
    <>
      <div className="tours" id="tours">
        <div className="container">
          <div className="row">

            <div className="content-col">
              <h1>Discover New Destination</h1>
              <div class="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                voluptatibus atque ut cupiditate. Dolore deleniti accusamus
                voluptate asperiores voluptatem id blanditiis sequi delectus
                voluptas minus!
              </p>
              <button className="ctn">Read More</button>
            </div>

            <div className="image-col">
                <img src={img1} />
                <img src={img2} />
                <img src={img3} />
                <img src={img4} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Tours;
