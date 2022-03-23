import React from 'react';
import './FoodCart.css'

const FoodCart = ({ food, getName }) => {
    // console.log(food);
    const { strArea, strMealThumb, strIngredient1 } = food
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <h3>{strIngredient1}</h3>
            <h4>{strArea}</h4>
            <button onClick={() => { getName(food) }} className='cart-btn'>Check Name</button>

        </div>
    );
};

export default FoodCart;