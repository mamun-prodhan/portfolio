import React, { useEffect, useState } from "react";
import MyProjectCard from "../Home/MyProjectCard/MyProjectCard";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="mb-8 bg-white py-10 text-black">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8">
        Projects
      </h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-4">
        {projects.map((project) => (
          <MyProjectCard key={project.id} project={project}></MyProjectCard>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
