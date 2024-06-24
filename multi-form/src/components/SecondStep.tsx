import React,{ useContext } from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { multiStepContext } from '../StepContext';
// const initialValues = {
//     city: "",
//     address: "",
//     postalCode: "",
//   };
export default function SecondStep() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    const formik = useFormik({
        initialValues: userData,
        validationSchema: signUpSchema,
        onSubmit: async (values) => {
          setUserData({ ...userData, ...values }); 
          setStep(3); 
             
   
        },
      });
  return (
    <>
    <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit} >
      <div>
        <TextField
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          id="city"
          label="City"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
        {formik.errors.city && formik.touched.city ? (
            <p className="form-errors">{formik.errors.city}</p>
          ) : null}
      </div>
      <div>
        <TextField
        type="text"
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        autoComplete="off"
        id="address"
          label="Address"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
         {formik.errors.address && formik.touched.address ? (
            <p className="form-errors">{formik.errors.address}</p>
          ) : null}
      </div>
      <div>
        <TextField
         type="text"
         name="postalCode"
         value={formik.values.postalCode}
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         autoComplete="off"
         id="PostalCode"
          label="Postal Code"
          margin="normal"
          variant="outlined"
          color="secondary"
        />
        {formik.errors.postalCode && formik.touched.postalCode ? (
            <p className="form-errors">{formik.errors.postalCode}</p>
          ) : null}
      </div>
      <div>
      <Button type= "submit" onClick={()=>setStep(1)} variant="contained" color="primary">
          Back
        </Button>
      
        <Button type= "submit" onClick={()=>setStep(3)} variant="contained" color="primary">
          Next
        </Button>
      </div>
       </form>
    </>
  );
}







