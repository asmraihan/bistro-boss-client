import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id } = item
    const {user} = useContext(AuthContext)
    const {refetch} = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = (item) => {
        console.log(item)
        if(user && user.email){
            const cartItem = {menuItemId : _id, name, image, price, email : user.email}
           fetch('https://bistro-boss-server-pink-two.vercel.app/carts',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartItem)
           })
           .then(res => res.json())
              .then(data => {
            if(data.insertedId){
                refetch() /* refectch card to update the number of items in the cart */
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food Added to Cart Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }  
            })
        }
        else{
            Swal.fire({
                title: 'Please Login First!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location} })
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute px-5 py-2 right-5 top-4 bg-gray-800 text-white'>${price}</p>
            <div className="card-body">
                <h2 className=" text-lg font-semibold text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-zinc-100 border-orange-400 border-0 border-b-4 mt-4">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;