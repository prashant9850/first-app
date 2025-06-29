import { pricingOptions } from "../constants";
const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-center text-3xl lg:text-7xl sm:text-8xl my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="bg-gradient-to-r from-orange-500 to-orange-900 bg-clip-text text-transparent text-xl mb-4 ml-2">
                    (Most popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="mt-6 text-5xl mr-2">{option.price}</span>
                <span>/month</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
