const New = () => {
  return (
    <section className="new section" id="new">
    <h2 className="section-title">NEW COLLECTIONS</h2>

    <div className="new__container bd-grid">
        <div className="new__mens">
            <img src="assets/img/new1-1.png" alt="new1" className="new__mens-img"/>
            <h3 className="new__title">Mens Shoes</h3>
            <span className="new__price">From $79.99</span>
            <a href="#" className="btn-light">View Collection <i className="bx bx-right-arrow-alt btn-icon"></i></a>
        </div>

        <div className="new__sneaker">
            <div className="new__sneaker-card">
                <img src="assets/img/new2-1.png" alt="new2" className="new__sneaker-img"/>
                <div className="new__sneaker-overlay">
                    <a href="#" className="btn">Add to Cart</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src="assets/img/new3-1.png" alt="new3" className="new__sneaker-img"/>
                <div className="new__sneaker-overlay">
                    <a href="#" className="btn">Add to Cart</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src="assets/img/new4-1.png" alt="new4" className="new__sneaker-img"/>
                <div className="new__sneaker-overlay">
                    <a href="#" className="btn">Add to Cart</a>
                </div>
            </div>

            <div className="new__sneaker-card">
                <img src="assets/img/new5-1.png" alt="new5" className="new__sneaker-img"/>
                <div className="new__sneaker-overlay">
                    <a href="#" className="btn">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default New