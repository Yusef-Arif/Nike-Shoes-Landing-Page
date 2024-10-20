import ProductsCards from "../components/ProductsCards";
import { products } from "../constans";

const PopularProducts = () => {
  return (
    <section id="products">
      <div className="max-sm:mt-12">
        <h1 className="text-4xl font-bold">
          Our <span className="text-coral-red font-montserrat">Popular</span>{" "}
          Products
        </h1>
        <p className="max-w-sm mt-3 font-palanquin text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          repudiandae provident neque animi m
        </p>
      </div>
      <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  max-sm:gap-12 sm:gap-6 justify-center items-center">
        {products.map((product, index) => (
          <ProductsCards key={product.name} {...product} itemKey={index} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
