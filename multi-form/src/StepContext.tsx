// import React,{useState} from 'react';
// import App from './App';
// export const multiStepContext= React.createContext();


//  const  StepContext=()=> {
//     const[currentStep,setStep]=useState(1);
//     const[userData,setUserData]=useState({
//         firstname: "",
//         lastname: "",
//         email: "",
//         city: "",
//         address: "",
//         postalCode: "",
//         education:"",
//     hobbies:"",
//     age:"",
//       });
//     const[finalData,setFinalData]=useState([]);
//     function submitData(){
//         setFinalData(finalData=>[...finalData,userdata]);
//         setUserData('');
//         setStep(1);
//     }
//   return (
//     <div>
//     <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
//     <App />
    
//     </multiStepContext.Provider>
//     </div>
//   )
// }
// export default StepContext



// import React, { createContext, useState } from 'react';

// export const multiStepContext = createContext();

// export function StepContextProvider({ children }) {
//   const [currentStep, setStep] = useState(1);
//   const [userData, setUserData] = useState({});

//   return (
//     <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData }}>
//       {children}
//     </multiStepContext.Provider>
//   );
// }






// import React, { useState } from 'react';
// import { collection, addDoc } from 'firebase/firestore';
// import { db } from // Import Firestore instance

// export const multiStepContext = React.createContext();

// const StepContext = ({ children }) => {
//   const [step, setStep] = useState(1);
//   const [userData, setUserData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     city: "",
//     address: "",
//     postalCode: "",
//     education: "",
//     hobbies: "",
//     age: "",
//   });
//   const [finalData, setFinalData] = useState([]);

//   const submitData = async () => {
//     try {
//       await addDoc(collection(db, "users"), userData);
//       setFinalData((prevData) => [...prevData, userData]);
//       setUserData({
//         firstname: "",
//         lastname: "",
//         email: "",
//         city: "",
//         address: "",
//         postalCode: "",
//         education: "",
//         hobbies: "",
//         age: "",
//       });
//       setStep(1);
//       alert("Data submitted successfully!");
//     } catch (error) {
//       console.error("Error adding document: ", error);
//       alert("Error submitting data!");
//     }
//   };

//   return (
//     <multiStepContext.Provider value={{ step, setStep, userData, setUserData, finalData, setFinalData, submitData }}>
//       {children}
//     </multiStepContext.Provider>
//   );
// };

// export default StepContext;





// import React, { useState } from 'react';

// export const multiStepContext = React.createContext();

// const StepContext = ({ children }) => {
//   const [currentStep, setStep] = useState(1);
//   const [userData, setUserData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     city: '',
//     address: '',
//     postalCode: '',
//     education: '',
//     hobbies: '',
//     age: '',
//   });

//   return (
//     <multiStepContext.Provider value={{ currentStep, setStep, userData, setUserData }}>
//       {children}
//     </multiStepContext.Provider>
//   );
// };

// export default StepContext;




// StepContext.tsx
'use client'
import React, { useState, useContext } from 'react';
import { collection, addDoc } from 'firebase/firestore';

import { db } from './firebaseConfig' // Adjust the path to your firebase config

export const multiStepContext = React.createContext();

const StepContext = ({ children }) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    city: '',
    address: '',
    postalCode: '',
    education: '',
    hobbies: '',
    age: '',
  });
  const [finalData, setFinalData] = useState([]);

  const submitData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), userData);
      setFinalData((prevData) => [...prevData, userData]);
      setUserData({
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        address: '',
        postalCode: '',
        education: '',
        hobbies: '',
        age: '',
      });
      setStep(1);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error submitting data!');
    }
  };

  return (
    <multiStepContext.Provider
      value={{ currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData }}
    >
      {children}
    </multiStepContext.Provider>
  );
};

export default StepContext;
