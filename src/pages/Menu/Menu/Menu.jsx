
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import desertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/usemenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={menuImg} title='Our Menu' ></Cover>
            {/* main cover */}
            <SectionTitle
                heading={'Todays offer'}
                subHeading={'Dont Miss'}
            ></SectionTitle>
            {/* offered menuy items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory items={desserts} title='Desserts' img={desertImg}></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg}></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} title='Salad' img={saladImg}></MenuCategory>
            {/* soup menu items */}
            <MenuCategory items={soup} title='Soup' img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;