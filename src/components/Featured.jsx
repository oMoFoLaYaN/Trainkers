const Featured = () => {
  return (
    <section className="featured section" id="featured">
    <h2 className="section-title">Featured</h2>

    <div className="featured__container bd-grid">

        <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src="assets/img/featured1.png" alt="featured1" className="sneaker__img"/>
            <span className="sneaker__name">Nike Jordan</span>
            <span className="sneaker__price">$149.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

        <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src="assets/img/featured2.png" alt="featured2" className="sneaker__img"/>
            <span className="sneaker__name">Nike Free RN</span>
            <span className="sneaker__price">$149.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

        <article className="sneaker">
            <div className="sneaker__sale">Sale</div>
            <img src="assets/img/featured3.png" alt="featured3" className="sneaker__img"/>
            <span className="sneaker__name">Nike Free RN</span>
            <span className="sneaker__price">$149.99</span>
            <a href="#" className="btn-light">Add to Cart <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </article>

    </div>
</section>
  )
}

export default Featured