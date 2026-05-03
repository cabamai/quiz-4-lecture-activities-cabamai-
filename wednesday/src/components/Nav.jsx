import { NavLink } from 'react-router-dom';

function Nav(){
    return (
        <div>
            <NavLink 
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >about</NavLink>
            <NavLink 
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >Home</NavLink>
            <NavLink 
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >Contact</NavLink>
            <NavLink 
                to="/posts"
                className={({ isActive }) => (isActive ? 'active' : '')}
            >Posts</NavLink>
        </div>
    );
}

export default Nav;