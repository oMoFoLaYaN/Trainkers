const Home = () => {
return (
        <section className="home" id="home">
            <div className="home__container bd-grid">

                <div className="home__hero">
                    <div className="home__shape"></div>
                    <img src="assets/img/imghome.png" alt="sneaker" className="home__img"/>
                </div>

                <div className="home__data">
                    <span className="home__new">New in</span>
                    <h1 className="home__title">YEEZY BOOST <br/> SPLY - 350</h1>
                    <p className="home__description">Explore the new Collections of sneakers</p>
                    <a href="#" className="btn">Explore Now</a>
                </div>
                
            </div>
        </section>
    )
  }
  
  export default Home
  