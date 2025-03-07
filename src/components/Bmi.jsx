import React, { useState } from 'react'

export default function Bmi() {
    const [height,setheight]=useState('');
    const [weight,setweight]=useState('');
    const [result,setresult]=useState('');
    const[show,setshow]=useState(false);
    const [decision, setdecision]=useState("");
    const[showanimation,setanimation]=useState(false);
    const handleweight = (event) => {
        setweight(event.target.value);
    }

    const handleheight = (event) => {
        setheight(event.target.value);
    }
    const calculate=()=>{
        if(height && weight)                                                        
        {
        const bmi= weight/(height*height);
        setTimeout(() => {
            setanimation(false);
        }, 3000);
        setanimation(true);
        setresult(bmi.toFixed(2));
        setTimeout(() => {
            setshow(true);
        }, 3000);
    
        
        if(bmi<18.5)
        {
            setdecision("UNDERWEIGHT");
        }
        else if(bmi>18.5 && bmi<24.9)
        {
            setdecision("HEALTHY");
        }
        else
        {
            setdecision("OBESE");
        }
        }

    }
    const clear=()=>{
        setshow(false);
        setheight('');
        setweight('');
    }
  return (
    <>
    <div>
        <h1>BMI CALCULATOR</h1>
        <br></br>
        <br></br>
        <h2 id="bmi2">WHAT IS BMI?</h2>
        <h6 id="bmi3">Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
            <br></br>
            Use the tool below to calculate you BMI.
        </h6>
      <form>
        <input value={weight} type="number" onChange={handleweight} placeholder='Enter your weight in kg...' className='input mx-5 my-5'></input>
        <input value={height} type="number" onChange={handleheight} placeholder='Enter your height in m...' className='input mx-5 my-5' ></input>
        <button type="button" className="calculatebutton" onClick={calculate}>CALCULATE</button>
        <button class="clearbutton"> CLEAR
        </button>

      </form>
      <div>
        {
            showanimation &&
            <div className="container2">
            <div className="loading">
            <svg width="64px" height="48px">
                <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
              <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
            </svg>
          </div>
          </div> 
        }
      </div>
      <br></br>
      <div>
        {
            show &&  <h5> Your BMI is {result} and according to GOOGLE you are {decision}</h5>    
           
       
       
        }
      </div>
    </div>
    </>
  )
}