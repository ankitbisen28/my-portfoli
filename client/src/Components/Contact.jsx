import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [done, setdone] = useState(false);
  const [data, setdata] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs
        .sendForm(
          "service_tx8dcb6",
          "template_jtsn0ar",
          formRef.current,
          "0alO80Zq6XKb8tuop"
        )
        .then(
          (result) => {
            console.log(result.text);
            setdone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );

        clearForm();
  };
  
  const clearForm = () => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    name.value = ''
    email.value = ''
    subject.value = ''
    message.value = ''
  }

  const handleInput = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* < <!-- Contact Start --> */}
      <div className="container-fluid py-5" style={{marginTop:"4rem"}} id="contact">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1
              className="display-1 text-uppercase text-white"
              style={{ WebkitTextStroke: "1px #dee2e6" }}
            >
              Contact
            </h1>
            <h1 className="position-absolute text-uppercase text-primary">
              Contact Me
            </h1>
          </div>
          {done && (
            <div className="alert alert-dismissible alert-primary">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
              ></button>
              <strong>Form</strong>{" "}
              <a href="/" className="alert-text">
                 has been submitted
              </a>{" "}
            </div>
          )}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form text-center">
                <div id="success"></div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate="novalidate"
                  ref={formRef}
                  onSubmit={handleSubmit}
                >
                  <div className="form-row">
                    <div className="control-group col">
                      <input
                        type="text"
                        className="form-control p-4"
                        id="name"
                        name="user_name"
                        onChange={handleInput}
                        placeholder="Your Name"
                        required="required"
                        data-validation-required-message="Please enter your name"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group col">
                      <input
                        type="email"
                        className="form-control p-4"
                        id="email"
                        name="user_email"
                        onChange={handleInput}
                        placeholder="Your Email"
                        required="required"
                        data-validation-required-message="Please enter your email"
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="control-group">
                    <input
                      type="text"
                      className="form-control p-4"
                      id="subject"
                      name="user_subject"
                      onChange={handleInput}
                      placeholder="Subject"
                      required="required"
                      data-validation-required-message="Please enter a subject"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      className="form-control py-3 px-4"
                      rows="5"
                      id="message"
                      name="message"
                      placeholder="Message"
                      onChange={handleInput}
                      required="required"
                      data-validation-required-message="Please enter your message"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <button
                      className="btn btn-primary"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
    </>
  );
};
