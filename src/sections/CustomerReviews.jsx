import Reviews from "../components/Reviews";
import { reviews } from "../constans";

const CustomerReviews = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-col">
        <h1 className="font-palanquin capitalize text-center text-4xl font-bold max-sm:text-4xl">
          What Our <span className="text-coral-red inline-block">Customer</span>{" "}
          Say?
        </h1>
        <p className="font-montserrat text-slate-500  text-center  mt-2 mb-2 max-w-sm">
          Here stories about our satisfied Customers about there experiences
          with us.
        </p>
      </div>
      <div className="flex justify-center items-center flex-wrap p-10">
        {reviews.map((review) => (
          <Reviews key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
