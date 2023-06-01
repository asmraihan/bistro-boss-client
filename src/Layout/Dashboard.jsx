import { FaBars, FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const { cart } = useCart()
    // TODO: Check if user is admin for data form server
    // const isAdmin = true
    const [isAdmin] = useAdmin()
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 ">

                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/additem'><FaUtensils></FaUtensils>Add Item</NavLink></li>
                            <li><NavLink to='/dashboard/manageitems'><FaWallet></FaWallet> Manage items</NavLink></li>
                            <li><NavLink to='/dashboard/history'><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUsers></FaUsers> All Users</NavLink></li>
                           
                        </> :
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li>
                                    <NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart  <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink>
                                </li>
                            </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'><FaBars></FaBars>Menu</NavLink></li>
                    <li><NavLink><FaShoppingCart></FaShoppingCart>Shop</NavLink></li>
                    <li><NavLink><FaWallet></FaWallet> Contact</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;