import { collection1, collection2 } from "../assets";

const Collections = () => {
  return (
    <section className="collection section">
    <div className="collection__container bd-grid">
        <div className="collection__card">
            <div className="collection__data">
                <h3 className="collection__name">Nike</h3>
                <p className="collection__description">
                    New collection 2020
                </p>
                <a href="#" className="btn-light">Buy now <i className="bx bx-right-arrow-alt btn-icon"></i></a>
            </div>

            <img src={collection1} alt="collection1" className="collection__img"/>
        </div>

        <div className="collection__card">
            <div className="collection__data">
                <h3 className="collection__name">Addidas</h3>
                <p className="collection__description">
                    New collection 2020
                </p>
                <a href="#" className="btn-light">Buy now <i className="bx bx-right-arrow-alt btn-icon"></i></a>
            </div>

            <img src={collection2} alt="collection2" className="collection__img"/>
        </div>
    </div>
</section>
  )
}

export default Collections