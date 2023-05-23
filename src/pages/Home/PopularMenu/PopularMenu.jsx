import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/MenuItem/Menuitem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then( res => res.json())
        .then( data => {
            const popularItems = data.filter( item => item.category === 'popular')
            setMenu(popularItems)
        })
    }, []);
    return (
        <section className="mb-12">
                <SectionTitle
                heading={'From Our Menu'}
                subHeading={'Popular Items'}
                ></SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        menu.map(item=> <Menuitem
                        key={item._id}
                        item={item}
                        ></Menuitem>)
                    }
                </div>
            <div className="text-center">
            <button className="btn btn-outline border-t-0 border-r-0 border-l-0 text-black mt-4 hover:bg-white hover:text-orange-400">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;