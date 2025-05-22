import React, { useState } from 'react'

export default function Bmi() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');
  const [show, setShow] = useState(false);
  const [decision, setDecision] = useState('');
  const [showAnimation, setAnimation] = useState(false);
  const [bmiCategory, setBmiCategory] = useState('');

  const handleWeight = (event) => {
    setWeight(event.target.value);
  }

  const handleHeight = (event) => {
    setHeight(event.target.value);
  }

  const calculate = () => {
    if (height && weight) {
      const bmi = weight / (height * height);
      setAnimation(true);

      setTimeout(() => {
        setAnimation(false);
        setResult(bmi.toFixed(2));
        setShow(true);

        if (bmi < 18.5) {
          setDecision('Underweight');
          setBmiCategory('underweight');
        } else if (bmi >= 18.5 && bmi < 25) {
          setDecision('Healthy');
          setBmiCategory('healthy');
        } else if (bmi >= 25 && bmi < 30) {
          setDecision('Overweight');
          setBmiCategory('overweight');
        } else {
          setDecision('Obese');
          setBmiCategory('obese');
        }
      }, 2000);
    }
  }

  const clear = () => {
    setShow(false);
    setHeight('');
    setWeight('');
    setResult('');
    setDecision('');
    setBmiCategory('');
  }

  return (
    <div className="bmi-container">
      <div className="bmi-content">
        <h1 className="bmi-title">BMI Calculator</h1>

        <div className="bmi-info">
          <h2>What is BMI?</h2>
          <p>
            Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women.
            Use the calculator below to determine your BMI and understand your weight category.
          </p>
        </div>

        <div className="bmi-calculator">
          <div className="input-group">
            <label htmlFor="weight">Weight (kg)</label>
            <input
              id="weight"
              type="number"
              value={weight}
              onChange={handleWeight}
              placeholder="Enter your weight"
              className="bmi-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="height">Height (m)</label>
            <input
              id="height"
              type="number"
              value={height}
              onChange={handleHeight}
              placeholder="Enter your height"
              className="bmi-input"
            />
          </div>

          <div className="button-group">
            <button
              type="button"
              onClick={calculate}
              className="calculate-button"
              disabled={!height || !weight}
            >
              Calculate BMI
            </button>
            <button
              type="button"
              onClick={clear}
              className="clear-button"
            >
              Clear
            </button>
          </div>
        </div>

        {showAnimation && (
          <div className="loading-container">
            <div className="loading-spinner">
              <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
              </svg>
            </div>
          </div>
        )}

        {show && (
          <div className={`bmi-result ${bmiCategory}`}>
            <div className="result-header">
              <h3>Your BMI Result</h3>
              <span className="bmi-value">{result}</span>
            </div>
            <div className="result-category">
              <span className="category-label">Category:</span>
              <span className="category-value">{decision}</span>
            </div>
            <div className="result-message">
              {bmiCategory === 'underweight' && (
                <p>You are underweight. Consider consulting with a healthcare provider about healthy ways to gain weight.</p>
              )}
              {bmiCategory === 'healthy' && (
                <p>Congratulations! You are in the healthy weight range. Maintain your current lifestyle and eating habits.</p>
              )}
              {bmiCategory === 'overweight' && (
                <p>You are overweight. Consider making lifestyle changes to achieve a healthier weight.</p>
              )}
              {bmiCategory === 'obese' && (
                <p>You are in the obese category. It's recommended to consult with a healthcare provider about weight management.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}