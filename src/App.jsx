import React from 'react';

const App = () => {
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
        />

        {/*weight*/}
        <label htmlFor='weight'> weight (kg) </label>
        <input
          type='number'
          id='weight'
          placeholder='eg. 60'
        />

        {/*Btn*/}

        <button>Calculate</button>

        {/*result*/}
        <div className='result'></div>
      </div>
    </div>
  );
};

export default App;
