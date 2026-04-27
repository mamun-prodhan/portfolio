import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ipav4ax",
        "template_rf1pj47",
        form.current,
        "fWAR6WQoUAoilYDNu"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          alert("❌ Failed to send message");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <div className="text-black bg-base-200 rounded-xl my-8 lg:my-10 xl:my-16 p-8">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Contact Me
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="pt-5 px-0 md:p-8 w-full md:w-3/4 mx-auto"
      >
        <div className="form-control">
          <label className="label-text px-1 py-2">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label-text px-1 py-2">Your Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label-text px-1 py-2">Message</label>
          <textarea
            name="message"
            className="textarea w-full textarea-bordered"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "SEND"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;