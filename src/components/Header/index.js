import React, { useContext, useEffect } from "react";
import { useFormik } from "formik";
import locationContext from "../../context/locationContext";

function Header() {
  const { setCurrentCity } = useContext(locationContext);
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      location: "Istanbul",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  
  useEffect(() => {
    setCurrentCity(values.location);
  }, [values.location]);

  return (
    <div className="header">
      <select name="location" value={values.location} onChange={handleChange}>
        <option value="Istanbul">İstanbul</option>
        <option value="Ankara">Ankara</option>
        <option value="Izmir">İzmir</option>
      </select>
    </div>
  );
}

export default Header;
