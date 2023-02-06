import { Home, Header, Collections, Featured, Footer, Women, Offer, Newsletter, New } from "./components";

const App = () => {
 return (
    <div>
    <Header/>
    <main classNameName="l-main">
      <Home/>
      <Featured/>
      <Collections/>
      <Women/>
      <New/>
      <Offer/>
      <Newsletter/>
    </main>
    <Footer/>
    </div>
   )
}

export default App
