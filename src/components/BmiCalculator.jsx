import React, { useState } from 'react';

export default function BmiCalculator() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [showResult, setShowResult] = useState(false);

    const calculateBMI = (e) => {
        e.preventDefault();
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            let bmiCategory = '';
            if (bmiValue < 18.5) {
                bmiCategory = 'Underweight';
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                bmiCategory = 'Normal weight';
            } else if (bmiValue >= 25 && bmiValue < 30) {
                bmiCategory = 'Overweight';
            } else {
                bmiCategory = 'Obese';
            }
            setCategory(bmiCategory);
            setShowResult(true);
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'Underweight':
                return '#f59e0b';
            case 'Normal weight':
                return '#10b981';
            case 'Overweight':
                return '#f97316';
            case 'Obese':
                return '#ef4444';
            default:
                return '#6b7280';
        }
    };

    return (
        <div className="bmi-calculator-container">
            <div className="bmi-calculator-card">
                <div className="bmi-header">
                    <h1>BMI Calculator</h1>
                    <p>Calculate your Body Mass Index to understand your weight category</p>
                </div>

                <form onSubmit={calculateBMI} className="bmi-form">
                    <div className="form-group">
                        <label htmlFor="height">Height (cm)</label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            placeholder="Enter your height"
                            required
                            min="50"
                            max="250"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="weight">Weight (kg)</label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            placeholder="Enter your weight"
                            required
                            min="20"
                            max="300"
                        />
                    </div>

                    <button type="submit" className="button button-primary">
                        Calculate BMI
                    </button>
                </form>

                {showResult && (
                    <div className="bmi-result" style={{ '--category-color': getCategoryColor(category) }}>
                        <div className="result-header">
                            <h2>Your BMI Result</h2>
                            <span className="bmi-value">{bmi}</span>
                        </div>
                        <div className="category-badge" style={{ backgroundColor: getCategoryColor(category) }}>
                            {category}
                        </div>
                        <div className="bmi-scale">
                            <div className="scale-item">
                                <span className="scale-label">Underweight</span>
                                <span className="scale-range">&lt; 18.5</span>
                            </div>
                            <div className="scale-item">
                                <span className="scale-label">Normal</span>
                                <span className="scale-range">18.5 - 24.9</span>
                            </div>
                            <div className="scale-item">
                                <span className="scale-label">Overweight</span>
                                <span className="scale-range">25 - 29.9</span>
                            </div>
                            <div className="scale-item">
                                <span className="scale-label">Obese</span>
                                <span className="scale-range">&gt; 30</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
} 