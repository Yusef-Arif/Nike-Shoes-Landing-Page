const ServicesItems = ({ imgURL, label, subtext }) => {
  return (
    <div className="rounded-md shadow-3xl  flex-1 px-10 py-16">
      <img
        src={imgURL}
        alt=""
        className="bg-coral-red h-11 w-11 rounded-full p-3 my-5"
      />
      <h1 className="text-2xl font-bold leading-normal font-palanquin mb-2">
        {label}
      </h1>
      <p className="text-slate-500 max-w-sm leading-normal font-montserrat break-words ">
        {subtext}
      </p>
    </div>
  );
};

export default ServicesItems;
