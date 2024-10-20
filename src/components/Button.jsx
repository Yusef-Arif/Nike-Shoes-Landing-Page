const Button = ({ label, url, gray, fullWidth ,product}) => {
  return (
    <button
      className={`flex justify-center items-center ${product ? "rounded-md py-1 px-8 mt-7":"rounded-full p-3 px-7"} button ${
        gray
          ? "bg-white text-slate-gray border-gray-400 border"
          : "bg-coral-red text-white border-coral-red border"
      } ${fullWidth ? "w-full mt-0" : "mt-4"}`}
    >
      {label}
      {url && <img src={url} alt="arrow" className="rounded-full ml-2" />}
    </button>
  );
};

export default Button;
