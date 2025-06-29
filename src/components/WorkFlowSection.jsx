import code from "../assets/code.jpg";
import { checklistItems } from "../constants";
import { CheckCircle2 } from "lucide-react"; // optional check icon

const WorkFlowSection = () => {
  return (
    <div className="relative mt-32 mb-32 text-center">
      <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
          {" "}
          coding workflow
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row items-start justify-center lg:gap-20 gap-10 mt-16 px-6 text-left mb-32">
        <div className="w-full lg:w-1/2">
          <img
            src={code}
            alt="Coding Illustration"
            className="w-full h-auto max-h-[400px] rounded-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-between py-10 gap-x-15">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-1 text-orange-500">
                <CheckCircle2 size={24} />
              </div>
              <div className="pb-13">
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlowSection;
