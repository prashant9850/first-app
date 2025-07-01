import { communityLinks, platformLinks, resourcesLinks } from "../constants";

const sections = [
  { title: "Resources", links: resourcesLinks },
  { title: "Platform", links: platformLinks },
  { title: "Community", links: communityLinks },
];

const Footer = () => {
  return (
    <div className="w-full px-6 mt-20 pt-12 pb-16 border-t border-neutral-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <p className="mb-5 font-semibold text-white text-lg">
              {section.title}
            </p>
            {section.links.map((link, i) => (
              <div key={i} className="pb-3 text-neutral-500">
                {link.text}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
