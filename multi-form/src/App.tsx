import React, { useContext, useState } from 'react'

 import FirstStep from './components/FirstStep'
 import SecondStep from './components/SecondStep'
 import ThirdStep from './components/ThirdStep'
import './App.css'
import { multiStepContext } from './StepContext'
import { Stepper,StepLabel,Step } from '@mui/material'


function App() {
  const{currentStep,finalData}=useContext(multiStepContext);
  function showStep(step){
    // console.log(step);
      switch(step){
        case 1:
          
          return <FirstStep />
          case 2:
           
          return  <SecondStep />
            case 3:
              return <ThirdStep />
            
      }
    }

  return (
   
    <>
    <div className='app'>
<h2 style={{color:'red' , textDecoration:'underlined'}}>React Multistep Form!</h2>
<div className='center-stepper'>
  <Stepper style={{width:'18%'}} activeStep={currentStep-1} orientation="horizontal">
    <Step><StepLabel>____</StepLabel></Step>
    <Step><StepLabel>____</StepLabel></Step>
    <Step><StepLabel></StepLabel></Step>
  </Stepper>
</div>
 {showStep(currentStep )}
  {/*  <FirstStep /> 
    <SecondStep />
    <ThirdStep /> */}
   
     
     </div>
    </>
  )
}

export default App
