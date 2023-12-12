import React from "react";

const Contact = () => {
  return (
    <div className="text-black bg-base-200  rounded-xl my-16 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Contact Me
      </h1>
      <div className="card-body w-3/4 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <label className="label">
            <textarea
              className="textarea w-full textarea-bordered"
              placeholder="Message"
            ></textarea>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
