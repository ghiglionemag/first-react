import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>¡Check out this EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall lorem ipsum dolor sit amet etc etc etc"
              label="Adventure"
              path="/services"
            />
             <CardItem
              src="images/img-2.jpg"
              text="Travel throgh the Islands of Bali in a Private Cruise"
              label="Relaxing"
              path="/services"
            />
            
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden waterfall lorem ipsum dolor sit amet etc etc etc"
              label="Adventure"
              path="/services"
            />
             <CardItem
              src="images/img-2.jpg"
              text="Travel throgh the Islands of Bali in a Private Cruise"
              label="Relaxing"
              path="/services"
            />
             <CardItem
              src="images/img-2.jpg"
              text="Travel throgh the Islands of Bali in a Private Cruise"
              label="Relaxing"
              path="/services"
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
