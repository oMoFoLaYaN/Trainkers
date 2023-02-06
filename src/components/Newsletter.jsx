import React from 'react'

const Newsletter = () => {
  return (
    <section className="newsletter section">
    <div className="newsletter__container bd-grid">
        <div>
            <h3 className="newsletter__title">Subscribe And Get <br/> 10% OFF</h3>
            <p className="newsletter__description">
                Get 10% discount for all products
            </p>
        </div>

        <form action="" className="newsletter__subscribe">
            <input type="text" placeholder="Example@mail.com" className="newsletter__input"/>
            <a href="#" className="btn">Subscribe</a>
        </form>
    </div>
</section>
  )
}

export default Newsletter