import React from "react";
import { Field, reduxForm } from "redux-form";

const customFieldComponent = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let ContactForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form
      onSubmit={handleSubmit(data => {
        console.log("valid", data);
      })}
    >
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component={customFieldComponent} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact",
  validate: (allvalue, props, name) => {
    let error = {};
    // console.log(value, allvalue, props, name);
    if (allvalue.firstName && allvalue.firstName.length > 5) {
      error.firstName = "名字不能大于5";
    }
    return error;
  }
})(ContactForm);

export default ContactForm;
