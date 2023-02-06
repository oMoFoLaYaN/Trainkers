import { Home, Header, Collections, Featured, Footer, Women, Offer, Newsletter, New } from "./components";
import { Outlet } from "react-router-dom";

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
    <div id="detail">
        <Outlet />
      </div>
    </div>
   )
}

export default App
