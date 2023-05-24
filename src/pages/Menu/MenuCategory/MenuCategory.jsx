
import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import Menuitem from '../../Shared/MenuItem/Menuitem';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8'>
            {title && <Cover img={img} title={title} > </Cover>}

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-16 ">
                    {
                        items.map(item=> <Menuitem
                        key={item._id}
                        item={item}
                        ></Menuitem>)
                    }
                </div>
               <Link to={`/order/${title}`} className='flex items-center justify-center'>
               <button className="btn btn-outline border-t-0 border-r-0 border-l-0  mt-4 hover:bg-white hover:text-black">Order Your Food</button>
               </Link>
        </div>
    );
};

export default MenuCategory;