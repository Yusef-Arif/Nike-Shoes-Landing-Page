import { star } from "../assets/icons";

const Reviews = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col text-center justify-center p-8 max-sm:p-2">
      <img src={imgURL} alt="" className="rounded-full mx-auto" width={125} height={125}/>
      <p className="mt-5 mb-2 font-palanquin text-slate-500 lg:max-w-sm sm:max-w-lg">
        {feedback}
      </p>
      <div className="flex justify-center items-center">
        <img src={star} alt="" className="p-1"/>
        <p>({rating})</p>
      </div>
      <h1 className="mt-2 font-montserrat text-xl font-bold">{customerName}</h1>
    </div>
  );
};

export default Reviews;
