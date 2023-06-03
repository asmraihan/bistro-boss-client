import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

// todo provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_PK)
const Payment = () => {
    const {cart} = useCart()
    const total = cart.reduce((sum, item) => sum + item.price, 0)
    const price = parseFloat(total.toFixed(2))
    console.log('debug price',price)

    return (
        <div className='w-full h-screen'>
            <SectionTitle
                heading='Payment'
                subHeading='Please provide payment info'

            ></SectionTitle>
            <h2 className='text-lg'>tekaaaa</h2>

            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart}  price={price}></CheckOutForm>
            </Elements>

        </div>
    );
};

export default Payment;