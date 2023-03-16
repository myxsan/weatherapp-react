import React from "react";
import { useFormik } from "formik";

function Header() {
  const { handleSubmit, handleChange, values } =
    useFormik({
      initialValues: {
        location: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return <div className="header">
    <select name="location" value={values.location} onChange={handleChange}></select>
  </div>;
}

export default Header;
