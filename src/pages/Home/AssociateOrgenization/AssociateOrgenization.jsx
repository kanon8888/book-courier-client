import React, { useEffect, useRef } from "react";

const organizations = [
  {
    id: 1,
    name: "Shanto-Mariam University of Creative Technology",
    logo: "https://i.ibb.co.com/svftJp7f/image-0.jpg",
    description: "Founded in 2003, focused on creative education.",
  },
  {
    id: 2,
    name: "The Daily Ajker Prottasha",
    logo: "https://i.ibb.co.com/XrgPy4pj/image-99.jpg",
    description: "A socially beneficial newspaper.",
  },
  {
    id: 3,
    name: "Shanto-Mariam Foundation",
    logo: "https://i.ibb.co.com/MF3qHTT/image-88.jpg",
    description: "Engaged in social, cultural & educational activities.",
  },
  {
    id: 4,
    name: "Shanto-Mariam Institute of Creative Technology",
    logo: "https://i.ibb.co.com/hNfDDJH/image-77.png",
    description: "Focused on skill development and innovation.",
  },
  {
    id: 5,
    name: "SMUCT Research Center",
    logo: "https://i.ibb.co.com/LDJ4YHYf/image-66.jpg",
    description: "Works on academic research and innovation.",
  },
  {
    id: 6,
    name: "Shanto-Mariam Cultural Center",
    logo: "https://i.ibb.co.com/WpGZmxDS/image-55.jpg",
    description: "Promotes art, culture, and creative expression.",
  },
  {
    id: 7,
    name: "Shanto-Mariam IT Solutions",
    logo: "https://i.ibb.co.com/fzqnxj1G/image-44.jpg",
    description: "Provides modern IT & software solutions.",
  },
  {
    id: 8,
    name: "Shanto-Mariam Media Network",
    logo: "https://i.ibb.co.com/NnYpQZr0/333.jpg",
    description: "Digital media & creative storytelling platform.",
  },
  {
    id: 9,
    name: "Shanto-Mariam Innovation Hub",
    logo: "https://i.ibb.co.com/39WDVxp5/222.jpg",
    description: "Supports startups & young innovators.",
  },
  {
    id: 10,
    name: "Shanto-Mariam Training Center",
    logo: "https://i.ibb.co.com/8LtyJ6tX/111.jpg",
    description: "Skill-based training & career development.",
  },
];

const AssociateOrganization = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({
          left: container.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center text-green-300 mb-10">
        Our Associate Organization
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden scroll-smooth"
      >
        {organizations.map((org) => (
          <div
            key={org.id}
            className="min-w-full md:min-w-[48%] bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex gap-5 mb-4">
              <img
                src={org.logo}
                alt={org.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-xl font-semibold">
                {org.name}
              </h3>
            </div>

            <p className="text-gray-600">
              {org.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociateOrganization;
