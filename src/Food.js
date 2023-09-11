import React from 'react';

const Food = ({ foodData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {foodData.map((food) => {
        const { idMeal, strMeal, strMealThumb, strInstructions } = food;
        return (
          <div key={idMeal} className="p-2 border border-gray-300 rounded-md">
            <div className="w-[50%] h-32 mx-auto">
              <img
                src={strMealThumb}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-black text-center mt-2"> {strMeal}</p>
            <p className="text-center mt-2">{strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Food;
