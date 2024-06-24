

import React, { useContext, useEffect } from 'react';
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { signUpSchema } from '../schemas';
import { multiStepContext } from '../StepContext';


const FirstStep = () => {
  const { currentStep,setStep, userData, setUserData } = useContext(multiStepContext);

  const formik = useFormik({
    initialValues: userData,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      setUserData({ ...userData, ...values }); 
      setStep(2);
    },
  });

  useEffect(() => {
    formik.setValues(userData); 
  }, [userData]);
  const handleNext = () => {
  
    setStep(currentStep + 1);
  };
  return (
    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
      <div>
        <TextField
          type="text"
          name="firstname"
          autoComplete='off'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="firstname"
          label="First Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        {formik.errors.firstname && formik.touched.firstname ? (
          <p className="form-errors">{formik.errors.firstname}</p>
        ) : null}
      </div>
      <div>
        <TextField
          type="text"
          name="lastname"
          autoComplete='off'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="lastname"
          label="Last Name"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        {formik.errors.lastname && formik.touched.lastname ? (
          <p className="form-errors">{formik.errors.lastname}</p>
        ) : null}
      </div>
      <div>
        <TextField
          type="text"
          name="email"
          autoComplete='off'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          label="Email"
          margin="normal"
          variant="outlined"
          color="secondary"
          fullWidth
        />
        {formik.errors.email && formik.touched.email ? (
          <p className="form-errors">{formik.errors.email}</p>
        ) : null}
      </div>
      <div>
        <Button type="submit" onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
