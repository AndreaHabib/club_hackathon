import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./styles/Form.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("xvodkdzj");
  if (state.succeeded) {
    return (
      <p className="success-message">
        We received your form! You will hear from us shortly
      </p>
    );
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset id="fs-frm-inputs">
        <input
          className="form-control"
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last name"
          required=""
        />
        <input
          className="form-control"
          type="email"
          name="_replyto"
          id="email-address"
          placeholder="Please enter your CSI email"
          required=""
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="form-control"
          rows="5"
          name="message"
          id="message"
          placeholder="Write down any question you have."
          required=""
        ></textarea>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input className="submit" type="submit" value="Submit" />
    </form>
  );
}

export default ContactForm;
