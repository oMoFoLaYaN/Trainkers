import React from 'react'

const Offer = () => {
  return (
    <section className="offer section">
    <div className="offer__container bd-grid">
        <div className="offer__data">
            <h3 className="offer__title">50% OFF</h3>
            <p className="offer__description">
                In Addidas Superstar Sneakers
            </p>
            <a href="#" className="btn">Shop Now</a>
        </div>

        <img src="assets/img/offert.png" alt="offer" className="offer__img"/>
    </div>
</section>
  )
}

export default Offer