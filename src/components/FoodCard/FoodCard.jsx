import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe } = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute px-5 py-2 right-5 top-4 bg-gray-800 text-white'>${price}</p>
            <div className="card-body">
                <h2 className=" text-lg font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline bg-zinc-100 border-orange-400 border-0 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;