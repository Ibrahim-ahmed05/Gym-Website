import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function WorkoutTracker() {
    const [workouts, setWorkouts] = useState([]);
    const [newWorkout, setNewWorkout] = useState({
        type: '',
        duration: '',
        calories: '',
        date: new Date().toISOString().split('T')[0]
    });

    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Calories Burned',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    });

    useEffect(() => {
        // Load workouts from localStorage
        const savedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
        setWorkouts(savedWorkouts);
        updateChartData(savedWorkouts);
    }, []);

    const updateChartData = (workoutData) => {
        const sortedWorkouts = [...workoutData].sort((a, b) => new Date(a.date) - new Date(b.date));
        setChartData({
            labels: sortedWorkouts.map(workout => workout.date),
            datasets: [
                {
                    label: 'Calories Burned',
                    data: sortedWorkouts.map(workout => workout.calories),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
            ]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedWorkouts = [...workouts, newWorkout];
        setWorkouts(updatedWorkouts);
        localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
        updateChartData(updatedWorkouts);
        setNewWorkout({
            type: '',
            duration: '',
            calories: '',
            date: new Date().toISOString().split('T')[0]
        });
    };

    const handleChange = (e) => {
        setNewWorkout({
            ...newWorkout,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="workout-tracker">
            <div className="workout-header">
                <h2>Workout Tracker</h2>
                <p>Track your fitness progress and stay motivated!</p>
            </div>

            <div className="workout-content">
                <div className="workout-form-container">
                    <form onSubmit={handleSubmit} className="workout-form">
                        <div className="form-group">
                            <label htmlFor="type">Workout Type</label>
                            <select
                                id="type"
                                name="type"
                                value={newWorkout.type}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select workout type</option>
                                <option value="running">Running</option>
                                <option value="cycling">Cycling</option>
                                <option value="swimming">Swimming</option>
                                <option value="weightlifting">Weightlifting</option>
                                <option value="yoga">Yoga</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="duration">Duration (minutes)</label>
                            <input
                                type="number"
                                id="duration"
                                name="duration"
                                value={newWorkout.duration}
                                onChange={handleChange}
                                required
                                min="1"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="calories">Calories Burned</label>
                            <input
                                type="number"
                                id="calories"
                                name="calories"
                                value={newWorkout.calories}
                                onChange={handleChange}
                                required
                                min="1"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={newWorkout.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="workout-button">
                            Add Workout
                        </button>
                    </form>
                </div>

                <div className="workout-stats">
                    <div className="stats-card">
                        <h3>Progress Chart</h3>
                        <div className="chart-container">
                            <Line data={chartData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top',
                                    },
                                    title: {
                                        display: true,
                                        text: 'Calories Burned Over Time'
                                    }
                                }
                            }} />
                        </div>
                    </div>

                    <div className="stats-summary">
                        <div className="stat-item">
                            <h4>Total Workouts</h4>
                            <p>{workouts.length}</p>
                        </div>
                        <div className="stat-item">
                            <h4>Total Calories</h4>
                            <p>{workouts.reduce((sum, workout) => sum + Number(workout.calories), 0)}</p>
                        </div>
                        <div className="stat-item">
                            <h4>Total Duration</h4>
                            <p>{workouts.reduce((sum, workout) => sum + Number(workout.duration), 0)} min</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="workout-history">
                <h3>Recent Workouts</h3>
                <div className="workout-list">
                    {workouts.slice().reverse().map((workout, index) => (
                        <div key={index} className="workout-item">
                            <div className="workout-info">
                                <span className="workout-type">{workout.type}</span>
                                <span className="workout-date">{workout.date}</span>
                            </div>
                            <div className="workout-details">
                                <span>{workout.duration} min</span>
                                <span>{workout.calories} cal</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 