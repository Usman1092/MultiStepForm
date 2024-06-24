

import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import { multiStepContext } from '../StepContext';

// const initialValues = {
//   education: '',
//   hobbies: '',
//   age: '',
// };

export default function ThirdStep() {
  const { setStep, userData, setUserData, submitData } = useContext(multiStepContext);

  const formik = useFormik({
    initialValues: userData,
    validationSchema: signUpSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
     console.log(userData);
      setUserData(values); 
      await submitData(); 
      resetForm();
    },
  });
  
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            type="text"
            name="education"
            value={formik.values.education}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            id="education"
            label="Education"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
          {formik.errors.education && formik.touched.education ? (
            <p className="form-errors">{formik.errors.education}</p>
          ) : null}
        </div>
        <div>
          <TextField
            type="text"
            name="hobbies"
            value={formik.values.hobbies}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            id="hobbies"
            label="Hobbies"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
          {formik.errors.hobbies && formik.touched.hobbies ? (
            <p className="form-errors">{formik.errors.hobbies}</p>
          ) : null}
        </div>
        <div>
          <TextField
            type="text"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="off"
            id="age"
            label="Age"
            margin="normal"
            variant="outlined"
            color="secondary"
          />
          {formik.errors.age && formik.touched.age ? (
            <p className="form-errors">{formik.errors.age}</p>
          ) : null}
        </div>
        <div>
          <Button variant="contained" onClick={() => setStep(1)} color="primary">
            Back
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
