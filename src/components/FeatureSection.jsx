import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 mb-20">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          features
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
            {" "}
            your code
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20 gap-y-13">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <div className="mt-1 mb-2 text-xl flex flex-col">
                  {feature.text}
                </div>
                <p className="text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
