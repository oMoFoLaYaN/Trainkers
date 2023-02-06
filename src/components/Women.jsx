import React from 'react'
import { women1, women2, women3, women4 } from '../assets'

const Women = () => {
  return (
    <section className="women section" id="women">
    <div className="section-title">
        WOMEN SNEAKERS
    </div>

    <div className="women__container bd-grid">

        <article className="sneaker">
            <img src={women1} alt="women1" className="sneaker__img"/>
            <span className="sneaker__name">Nike Free TR</span>
            <span className="sneaker__price">$129.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

        <article className="sneaker">
            <img src={women2} alt="women2" className="sneaker__img"/>
            <span className="sneaker__name">Nike Free TR</span>
            <span className="sneaker__price">$129.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

        <article className="sneaker">
            <img src={women3} alt="women3" className="sneaker__img"/>
            <span className="sneaker__name">Nike GS pink</span>
            <span className="sneaker__price">$129.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

        <article className="sneaker">
            <img src={women4} alt="women4" className="sneaker__img"/>
            <span className="sneaker__name">Nike GT 5</span>
            <span className="sneaker__price">$129.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

    </div>
</section>
  )
}

export default Women