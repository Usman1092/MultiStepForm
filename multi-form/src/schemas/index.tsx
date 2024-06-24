import * as Yup from "yup";
export const signUpSchema= Yup.object({
    firstname:Yup.string().min(2).max(10).required("Please Enter Your First Name!"),
    
    lastname:Yup.string().min(2).max(10).required("Please Enter Your Last Name!"),
    email :Yup.string().email().required("Please Enter Your Email!"),
    city:Yup.string().min(4).max(15).required("Plese Enter Your City"),
    address:Yup.string().min(10).max(50).required("Plese Enter Your Address"),
    postalCode:Yup.string().min(3).max(8).required("Enter Postal Code."),
    education:Yup.string().min(2).max(8).required("Enter Your Education."),
    hobbies:Yup.string().max(25).required("Enter your  Hobbies."),
    age:Yup.string().min(2).max(3).required("Enter Your Age."),
 
}); 