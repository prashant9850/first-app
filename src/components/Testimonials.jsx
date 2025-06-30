import { testimonials } from "../constants";
const Testimonials = () => {
  return (
    <div className="mt-10 tracking-wide">
      <h2 className="text-3xl lg:text-6xl sm:text-5xl text-center my-10 lg:my-20">
        What people are saying?
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-3">
            <div className="bg-neutral rounded-md p-6 text-md border border-nuetral-800 font-thin text-neutral-400">
              {testimonial.text}
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="italic font-normla text-sm text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
