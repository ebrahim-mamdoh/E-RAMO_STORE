import React from 'react'

// import imgas
import Imga1 from '../../assets/Sale2/1.jpg'
import Imga2 from '../../assets/Sale2/2.jpg'
import Imga3 from '../../assets/Sale2/3.jpg'




import './Sale2.css'






export default function Sale2() {
    const cards = [
        {
            img: Imga1,
            title: 'NEW COLLECTION JUST ARRIVED'
        },
        {
            img: Imga2,
            title: 'PASSION FOR FASHION'
        },
        {
            img: Imga3,
            title: 'FASHION FOR SELL NOW'
        },
    ];

    return (
        <div className="container my-box-container">
  <section className="card-section">
                <div className="card-container">
                    {cards.map((card, index) => (
                        <div className="card" key={index}>
                            <div className="img-container">
                                <img src={card.img} alt={card.title} />
                            </div>
                          
                        </div>
                    ))}
            </div>
        </section> 
        </div>
      
    );
}
