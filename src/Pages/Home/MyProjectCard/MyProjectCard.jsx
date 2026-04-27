import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
const MyProjectCard = ({ project }) => {
  const { title, image, url, description } = project;
  return (
    <div className="card bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={image}>
          <figure>
            <img className="rounded xl h-[312px] object-cover" src={image} alt="ProjectImage" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title text-start">{title}</h2>
        <p className="text-start">{description}</p>
        <div className="card-actions justify-start">
          <a className="inline-block bg-[#570DF8] border border-transparent hover:border-[#570DF8] duration-300 hover:bg-transparent text-white hover:text-[#570DF8] font-semibold px-4 py-2 rounded-lg" href={url} target="_blank" rel="noopener noreferrer">
            See Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
