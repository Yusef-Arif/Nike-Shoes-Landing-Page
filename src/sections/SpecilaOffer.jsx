import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecilaOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red inline-block mt-3">Special</span>{" "}
          offer
        </h1>
        <p className="font-montserrat text-slate-500 text-lg  mt-6 mb-2 lg:max-w-lg sm:max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nam
          impedit nisi quidem tenetur. Velit excepturi adipisci sequi, eaque
          rerum, non exercitationem consectetur quas
        </p>
        <p className="font-montserrat text-slate-500 text-lg  mt-6 mb-2 lg:max-w-lg sm:max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nam
          impedit nisi quidem tenetur. Velit excepturi adipisci sequi, eaque
          rerum, non exercitationem consectetur quas
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" />
          <Button label="Learn More" gray={true} />
        </div>
      </div>
    </section>
  );
};

export default SpecilaOffer;
