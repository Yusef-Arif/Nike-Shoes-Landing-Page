import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red inline-block mt-3 ml-2">Super</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 lg:max-w-lg sm:max-w-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum nam
          impedit nisi quidem tenetur. Velit excepturi adipisci sequi, eaque
          rerum, non exercitationem consectetur quas, voluptate reiciendis
          consequatur. A, exercitationem nihil.
        </p>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrival, quality comfort, and innovation for
          your active life.
        </p>
        <div>
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
