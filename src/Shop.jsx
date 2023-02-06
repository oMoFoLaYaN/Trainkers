import { Header, Products, Footer, Pagination } from "./components"
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div>
    <Header/>
    <main classNameName="l-main">
      <Products/>
      <Pagination/>
    </main>
    <Footer/>
    </div>
  )
}

export default Shop