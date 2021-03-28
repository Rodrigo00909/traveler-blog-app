import React from 'react';
import CardItem from '../Cards/CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='src/images/img-1.jpg'
                            text="Explore the hidden waterfall deep inside The Amazone Jungle"
                            label="Adventure"
                            path="/services" 
                        />
                        <CardItem 
                            src='src/images/img-3.jpg'
                            text="Travel to the great Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='src/images/img-1.jpg'
                            text="Explore the hidden waterfall deep inside The Amazone Jungle"
                            label="Adventure"
                            path="/services" 
                        />
                        <CardItem 
                            src='src/images/img-3.jpg'
                            text="Travel to the great Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services" 
                        />
                        <CardItem 
                            src='src/images/img-3.jpg'
                            text="Travel to the great Islands of Bali in a Private Cruise"
                            label="Luxury"
                            path="/services" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
