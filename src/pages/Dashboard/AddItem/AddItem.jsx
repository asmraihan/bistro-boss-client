import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);
    return (
        <div className='w-full px-36 h-screen'>
            <SectionTitle
                subHeading='Whats new'
                heading='Add am Item'
            ></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full" />
                </div>
                <div className='flex justify-between'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select
                            {...register("category", { required: true })}
                            className="select select-bordered">
                            <option disabled selected>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Desert</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Type here"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details</span>
                    </label>
                    <textarea
                        {...register("details", { required: true })}
                        className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Item image*</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                <input type="submit" value="Add Item" className='btn btn-sm mt-4' />
            </form>
        </div>
    );
};

export default AddItem;