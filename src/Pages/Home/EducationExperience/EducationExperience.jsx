import React from "react";

const educationData = [
  {
    title: "B.Sc in Computer Science and Engineering",
    place: "City University",
    date: "2018 - 2022",
    description:
      "Focused on software engineering, data structures, and web development.",
  },
];

const experienceData = [
  {
    title: "JavaScript Developer",
    place: "Linno (formerly Code Rex)",
    date: "Jan 2024 - Oct 2025",
    description:
      "Building scalable React applications and improving UI/UX performance.",
  }
];

const Timeline = ({ data }) => {
  return (
    <div className="relative border-l border-gray-700">
      {data.map((item, index) => (
        <div key={index} className="mb-12 ml-6">
          
          {/* Dot */}
          <span className="absolute -left-[11px] h-5 w-5 rounded-full border border-black/70 bg-white"></span>

          <p className="text-sm text-gray mb-1">{item.date}</p>

          <h3 className="text-xl font-semibold">{item.title}</h3>

          <p className="text-gray">{item.place}</p>

          <p className="mt-2 text-gray text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const EducationExperience = () => {
  return (
    <section className="bg-base-200 rounded-xl text-black/85 pt-10 pb-1 md:py-12 lg:py-16 xl:py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto space-y-10 md:space-y-16 lg:space-y-20">
        
        {/* EDUCATION */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Education
          </h2>
          <Timeline data={educationData} />
        </div>

        {/* EXPERIENCE */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
            Experience
          </h2>
          <Timeline data={experienceData} />
        </div>

      </div>
    </section>
  );
};

export default EducationExperience;