import React, { useState, useEffect } from 'react';

export default function MealPlanner() {
    const [meals, setMeals] = useState([]);
    const [newMeal, setNewMeal] = useState({
        name: '',
        calories: '',
        protein: '',
        carbs: '',
        fat: '',
        time: 'breakfast',
        date: new Date().toISOString().split('T')[0]
    });

    const [nutritionGoals, setNutritionGoals] = useState({
        calories: 2000,
        protein: 150,
        carbs: 250,
        fat: 70
    });

    useEffect(() => {
        const savedMeals = JSON.parse(localStorage.getItem('meals')) || [];
        setMeals(savedMeals);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedMeals = [...meals, newMeal];
        setMeals(updatedMeals);
        localStorage.setItem('meals', JSON.stringify(updatedMeals));
        setNewMeal({
            name: '',
            calories: '',
            protein: '',
            carbs: '',
            fat: '',
            time: 'breakfast',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleChange = (e) => {
        setNewMeal({
            ...newMeal,
            [e.target.name]: e.target.value
        });
    };

    const calculateDailyTotals = () => {
        const today = new Date().toISOString().split('T')[0];
        const todaysMeals = meals.filter(meal => meal.date === today);

        return todaysMeals.reduce((totals, meal) => ({
            calories: totals.calories + Number(meal.calories),
            protein: totals.protein + Number(meal.protein),
            carbs: totals.carbs + Number(meal.carbs),
            fat: totals.fat + Number(meal.fat)
        }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
    };

    const dailyTotals = calculateDailyTotals();

    return (
        <div className="meal-planner">
            <div className="meal-header">
                <h2>Meal Planner</h2>
                <p>Track your nutrition and plan your meals</p>
            </div>

            <div className="meal-content">
                <div className="meal-form-container">
                    <form onSubmit={handleSubmit} className="meal-form">
                        <div className="form-group">
                            <label htmlFor="name">Meal Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newMeal.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter meal name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="time">Meal Time</label>
                            <select
                                id="time"
                                name="time"
                                value={newMeal.time}
                                onChange={handleChange}
                                required
                            >
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="calories">Calories</label>
                            <input
                                type="number"
                                id="calories"
                                name="calories"
                                value={newMeal.calories}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="protein">Protein (g)</label>
                            <input
                                type="number"
                                id="protein"
                                name="protein"
                                value={newMeal.protein}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="carbs">Carbs (g)</label>
                            <input
                                type="number"
                                id="carbs"
                                name="carbs"
                                value={newMeal.carbs}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fat">Fat (g)</label>
                            <input
                                type="number"
                                id="fat"
                                name="fat"
                                value={newMeal.fat}
                                onChange={handleChange}
                                required
                                min="0"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={newMeal.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="meal-button">
                            Add Meal
                        </button>
                    </form>
                </div>

                <div className="nutrition-summary">
                    <div className="nutrition-goals">
                        <h3>Daily Nutrition Goals</h3>
                        <div className="goals-grid">
                            <div className="goal-item">
                                <h4>Calories</h4>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${Math.min(100, (dailyTotals.calories / nutritionGoals.calories) * 100)}%`,
                                            backgroundColor: dailyTotals.calories > nutritionGoals.calories ? '#ef4444' : '#10b981'
                                        }}
                                    ></div>
                                </div>
                                <p>{dailyTotals.calories} / {nutritionGoals.calories} kcal</p>
                            </div>

                            <div className="goal-item">
                                <h4>Protein</h4>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${Math.min(100, (dailyTotals.protein / nutritionGoals.protein) * 100)}%`,
                                            backgroundColor: dailyTotals.protein > nutritionGoals.protein ? '#ef4444' : '#10b981'
                                        }}
                                    ></div>
                                </div>
                                <p>{dailyTotals.protein} / {nutritionGoals.protein}g</p>
                            </div>

                            <div className="goal-item">
                                <h4>Carbs</h4>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${Math.min(100, (dailyTotals.carbs / nutritionGoals.carbs) * 100)}%`,
                                            backgroundColor: dailyTotals.carbs > nutritionGoals.carbs ? '#ef4444' : '#10b981'
                                        }}
                                    ></div>
                                </div>
                                <p>{dailyTotals.carbs} / {nutritionGoals.carbs}g</p>
                            </div>

                            <div className="goal-item">
                                <h4>Fat</h4>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{
                                            width: `${Math.min(100, (dailyTotals.fat / nutritionGoals.fat) * 100)}%`,
                                            backgroundColor: dailyTotals.fat > nutritionGoals.fat ? '#ef4444' : '#10b981'
                                        }}
                                    ></div>
                                </div>
                                <p>{dailyTotals.fat} / {nutritionGoals.fat}g</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="meal-history">
                <h3>Today's Meals</h3>
                <div className="meal-list">
                    {meals
                        .filter(meal => meal.date === new Date().toISOString().split('T')[0])
                        .map((meal, index) => (
                            <div key={index} className="meal-item">
                                <div className="meal-info">
                                    <span className="meal-name">{meal.name}</span>
                                    <span className="meal-time">{meal.time}</span>
                                </div>
                                <div className="meal-nutrition">
                                    <span>{meal.calories} kcal</span>
                                    <span>P: {meal.protein}g</span>
                                    <span>C: {meal.carbs}g</span>
                                    <span>F: {meal.fat}g</span>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
} 