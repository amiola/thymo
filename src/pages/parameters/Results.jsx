import React, { useContext } from 'react'
import Nav from '../../navbar/Nav'
import Context from '../../context/Context'

const Results = () => {
    const {calcs}=useContext(Context)
  return (
    <>
    <Nav/>
    <section className="results">
    <div className="head-img">
    <h1>Results</h1>
        </div>
        <div className="results-values">
        <h2>Body Mass Index (BMI)</h2>
        <p>{calcs?.bodyMassIndex?.value || 'You need to specify your height and weight.'} {calcs?.bodyMassIndex?.unit} <span>{calcs?.bodyMassIndex?.conclusion}</span></p>
        
        <h2>Basal Metabolic Rate</h2>
        <p>{calcs?.basalMetabolicRate?.hb?.calories?.value || 'You need to specify your age.'} {calcs?.basalMetabolicRate?.hb?.calories?.unit[0]}</p>
        
        <h2>Body Fat Percentage</h2>
        <p>{calcs?.bodyFatPercentage?.bmi?.value || 'You need to specify your age.'} {calcs?.bodyFatPercentage?.bmi?.unit[0]}
        <span> {calcs?.bodyFatPercentage?.bmi?.conclusion}</span></p>
        
        <h2>Ideal Body Weight</h2>
        <p>{calcs?.idealBodyWeight?.lorentz?.metric?.value || 'You need to specify your height and weight.'} {calcs?.idealBodyWeight?.lorentz?.metric?.unit[0]}</p>
        
        <h2>Resting Daily Energy Expenditure</h2>
        <p>{calcs?.restingDailyEnergyExpenditure?.bmi?.calories?.value || 'You need to specify your age.'} {calcs?.restingDailyEnergyExpenditure?.bmi?.calories?.unit[0]}</p>
        
        <h2>Total Daily Energy Expenditure</h2>
        <p>{calcs?.totalDailyEnergyExpenditure?.bmi?.calories?.value || 'You need to specify your age.'} {calcs?.totalDailyEnergyExpenditure?.bmi?.calories?.unit[0]}</p>
        
        <h2>Time Before Goal Weight</h2>
        <p>{calcs?.timeBeforeGoalWeight?.value || 'You need to specify your deficit and goal weight.'} {calcs?.timeBeforeGoalWeight?.unit[1]}</p>
        </div>
    </section>
    </>
  )
}

export default Results