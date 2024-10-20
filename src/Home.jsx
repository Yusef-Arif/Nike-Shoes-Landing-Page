import {
  Hero,
  PopularProducts,
  SpecilaOffer,
  Serves,
  Footer,
  CustomerReviews,
  Suscribe,
  SuperQuality,
} from "./sections/links";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage";
const Home = () => (
  <main className="relativ">
    <Nav product={false}/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
      <Routes>
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Serves />
    </section>
    <section className="padding">
      <SpecilaOffer />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-23 py-16 w-full">
      <Suscribe />
    </section>
    <section className="py-10 px-5 bg-black ">
      <Footer />
    </section>
  </main>
);
export default Home;
