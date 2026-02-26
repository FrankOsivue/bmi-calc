import React, { useState } from 'react';

const App = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState('');

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult('Please ensure you enter your weight and height');
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = '';
    if (bmi < 18.5) category = `Your BMI is ${bmi}. You are underweight`;
    else if (bmi < 25) category = `Your BMI is ${bmi}. Your weight is normal`;
    else if (bmi < 30) category = `Your BMI is ${bmi}. You are overweight`;
    else category = `Your BMI is ${bmi}. Your are OBESE`;

    setResult(category);
  };

  return (
    <div>
      <div className='container'>
        <h1>BMI Calculator</h1>

        <p className='subtitle'>
          Find out your body mass index by filling the fields below
        </p>

        {/* height*/}
        <label htmlFor='height'> Height (cm) </label>
        <input
          type='number'
          id='height'
          placeholder='eg. 170'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        {/*weight*/}
        <label htmlFor='weight'> weight (kg) </label>
        <input
          type='number'
          id='weight'
          placeholder='eg. 60'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        {/*Btn*/}

        <button onClick={calculateBMI}>Calculate</button>

        {/*result*/}
        <div className='result'> {result}</div>
      </div>
    </div>
  );
};

export default App;
