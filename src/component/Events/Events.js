import React from "react";
import EventImg from "../EventImg/EventImg";
import "./EventStyle.css";

import Everest from '../../../src/img/pic6new.jpg';
import Walking from '../../../src/img/pic7.JPG';


const Events = () => {
  return (
    <>
      <div className="events" id="events">
        <div className="container">

            <div className="title">
                <h1>Future Events</h1>
                <div className="line"></div>
            </div>

            <div className="row">
                <EventImg img={Everest} header='Balloons Festival' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor, unde laborum ipsam labore saepe iusto culpa accusamus quidem, quam natus iure? Ipsa molestiae suscipit architecto sed quis commodi dicta?'/>
                <EventImg img={Walking} header='Boat Trip' details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor, unde laborum ipsam labore saepe iusto culpa accusamus quidem, quam natus iure? Ipsa molestiae suscipit architecto sed quis commodi dicta?' />
            </div>
        </div>
      </div>
    </>
  );
};

export default Events;
