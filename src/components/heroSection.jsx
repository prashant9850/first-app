import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col mt-5 items-center lg:mt-20 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools
      </h1>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>

      <div>
        <p className="text-center mt-9 text-2xl text-neutral-500">
          Enpower your creativity and bring your VR apps ideas to life with our
          invite development tools.
        </p>
        <p className="text-center mt-3 text-2xl text-neutral-500">
          Get started today and turn your imagination into immersive reality!
        </p>
      </div>

      <div className="py-6 pb-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md"
        >
          start for free
        </a>
        <a href="#" className="py-3 px-6 rounded-md border">
          Documantation
        </a>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full pb-6">
        <div className="w-full max-w-[90vw] md:max-w-[550px] lg:max-w-[600px]">
          <video
            src={video1}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg border-4 border-orange-500"
          />
        </div>
        <div className="w-full max-w-[90vw] md:max-w-[550px] lg:max-w-[600px]">
          <video
            src={video2}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg border-4 border-orange-500"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
