import { CheckCircle2 } from "lucide-react";
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
                <span className="text-neutral-400 tracing-tight">/month</span>
              </p>
              <ul>
                {option.features.map((features, index) => (
                  <li key={index} className="mt-8 flex item-center">
                    <CheckCircle2></CheckCircle2>
                    <spam className="ml-2">{features}</spam>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounderd transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
