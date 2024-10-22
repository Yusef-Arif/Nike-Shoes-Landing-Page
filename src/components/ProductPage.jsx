import { useParams } from "react-router-dom";
import { products } from "../constans";
import Nav from "./Nav";
import { star } from "../assets/icons";
import Button from "./Button";
import ProductsCards from "./ProductsCards";
import { useEffect } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = products[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <section>
      <Nav product />
      {product ? (
        <div className="flex p-5 gap-12 max-sm:flex-col">
          <div>
            <div className="flex p-8 gap-12 max-sm:flex-col">
              <div>
                <img
                  src={product.imgURL}
                  alt={product.name}
                  className="w-[382px] h-[382px]"
                />
              </div>
              <div>
                <h3 className="mt-2 text-4xl max-sm:text-3xl leading-normal font-semibold font-palanquin">
                  {product.name}
                </h3>
                <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
                  {product.price}
                </p>
                <div className="mt-2 flex justify-start gap-2.5">
                  <img src={star} alt="rating icon" width={24} height={24} />
                  <p className="font-montserrat text-xl leading-normal text-slate-gray">
                    (4.5)
                  </p>
                </div>
                <Button label="Add To Cart" product />
              </div>
            </div>
            
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 max-w-lg ml-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              nam impedit nisi quidem tenetur. Velit excepturi adipisci sequi,
              eaque rerum, non exercitationem consectetur quas, voluptate
              reiciendis consequatur. A, exercitationem nihil.
            </p>
            <h1 className="text-3xl font-bold ml-5">
              Another{" "}
              <span className="text-coral-red font-montserrat">Popular</span>{" "}
              Products:
            </h1>
            
            <div className="mt-12 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  max-sm:gap-12 sm:gap-6 justify-center items-center">
              {products.map((product, index) => {
                console.log(index);
                if (index == id) {
                  return null;
                } else {
                  return (
                    <ProductsCards
                      key={product.name}
                      {...product}
                      itemKey={index}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found!</p>
      )}
    </section>
  );
};

export default ProductPage;
