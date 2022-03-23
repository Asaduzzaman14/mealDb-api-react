import React, { useEffect, useState } from 'react';
import FoodCart from '../FoodCard/FoodCart';
import './Food.css'


const Food = () => {
    const [foods, setFoods] = useState([])
    const [foodName, setFoodName] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    const getName = (food) => {
        setFoodName(food.strCategory)
    }

    return (
        <div>
            <h1>The MeaL dB</h1>
            <div className='container'>
                <div className='food-container'>
                    {
                        foods.map(food => <FoodCart
                            key={food.idMeal}
                            food={food}
                            getName={getName}

                        ></FoodCart>)
                    }
                </div>
                <div className='name'>
                    <h2>food name</h2>
                    <h2>{foodName}</h2>


                </div>
            </div>

        </div>
    );
};

export default Food;