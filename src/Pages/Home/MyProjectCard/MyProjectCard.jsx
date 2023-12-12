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
            <img className="rounded xl" src={image} alt="ProjectImage" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title text-start">{title}</h2>
        <p className="text-start">{description}</p>
        <div className="card-actions justify-start">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">See Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyProjectCard;
