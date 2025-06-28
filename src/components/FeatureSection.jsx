const FeatureSection = () => {
  return (
    <div className=" relative mt-20 border-b border-neutral-800 min-h-[800px]">
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
    </div>
  );
};

export default FeatureSection;
