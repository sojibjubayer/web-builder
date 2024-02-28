import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='navbar'>
            <CiSearch className="searchIcon"/>
            <input type="text" className="menuBarInput"/>
            <ul className="menu-items">
                <li>Categories</li>
                <li>Website Builders</li>
                <li>Today's deals</li>
            </ul>
        </div>
    );
};

export default Navbar;