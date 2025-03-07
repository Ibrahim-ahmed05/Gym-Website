import React from 'react'

export default function Plans() {
  return (
    <div>
      <h1 id="planheading">WELCOMER TO OUR PLANS</h1>
<div className="containercard">
<div className="card">
  <div className="card-details">
    <p className="text-title">WORKOUT</p>
    <p className="text-body">1. Personalized Workout Schedule.<br></br>2. Exercise Library.<br></br>3. Access to a Community.</p>
  </div>
  <button className="card-button">BUY NOW</button>
  
</div>
<div className="card">
  <div className="card-details">
    <p className="text-title">DIET</p>
    <p className="text-body">1. Personalized Meal Plans.<br></br>2. Nutritional Guidance.<br></br>3. Recipe Library.</p>
  </div>
  <button className="card-button">BUY NOW</button>
  
</div>
<div className="card">
  <div className="card-details">
    <p className="text-title">WORKOUT+DIET</p>
    <p className="text-body">1. Expert Support. <br></br>2. Includes Workout+Diet features.<br></br>3. Integrated Progress Monitoring</p>
  </div>
  <button className="card-button">BUY NOW</button>
  
</div>
    </div>
    </div>
  )
}
