import React from 'react';
import CardItem from '../Cards/CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out the catalog!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src='https://i.postimg.cc/c1bfytMt/iphone-13-2.png'
                            text="The best in the market: Iphone 11 Pro Max"
                            label="Iphone 11 Pro Max"
                            path="/services" 
                        />
                        <CardItem 
                            src='https://i.postimg.cc/L8RB4Yh9/iphone-11-review-26.jpg'
                            text="The new Iphone 11 is great"
                            label="Iphone 11"
                            path="/services" 
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src='https://i.postimg.cc/4dGBc7Fx/i-Phone-X.jpg'
                            text="An a secure phone: The great Iphone X"
                            label="Iphone X"
                            path="/services" 
                        />
                        <CardItem 
                            src='https://i.postimg.cc/YSYdjfRP/iphone8.jpg'
                            text="Nothing is more confortable that the Iphone 8"
                            label="Iphone 8"
                            path="/services" 
                        />
                        <CardItem 
                            src='https://i.postimg.cc/W1Q92fGr/iphone7.jpg'
                            text="Never forget the awesome iphone 7"
                            label="Iphone 7"
                            path="/services" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;
