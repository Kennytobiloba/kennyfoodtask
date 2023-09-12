import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from './Food';

function FoodApp() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

  const countries = ['Canadian', 'Italian', 'Japanese', 'Mexican'];

  const fetchData = async (country) => {
    setLoading(true);

    try {
      const response = await axios.get(API_URL, {
        params: { a: country },
      });

      if (response.data && response.data.meals) {
        
        const limitedFoodData = response.data.meals.slice(0, 5);
        setFoodData(limitedFoodData);
      } else {
        setFoodData([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setFoodData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCountry) {
      fetchData(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <div className='w-[60%] mx-auto'>
      <h1 className='text-center'>Food by Country</h1>
      <div className='flex justify-center mt-10 gap-4 mb-6'>
        {countries.map((country) => (
          <button
            key={country}
            onClick={() => setSelectedCountry(country)}
            className='p-2 border-2 text-white bg-black border-blue-50'
          >
            {country}
          </button>
        ))}
      </div>
      <Food selectedCountry={selectedCountry} foodData={foodData} />
      {loading ? <p>Loading...</p> : null}
    </div>
  );
}

export default FoodApp;
