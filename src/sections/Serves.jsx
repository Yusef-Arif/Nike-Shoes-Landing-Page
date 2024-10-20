import ServicesItems from "../components/ServicesItems";
import { services } from "../constans";

const Serves = () => {
  return (
    <section>
      <div className="flex justify-start items-center p-5 flex-wrap gap-3">
        {services.map((serve) => (
          <ServicesItems key={serve.label} {...serve} />
        ))}
      </div>
    </section>
  );
};

export default Serves;
