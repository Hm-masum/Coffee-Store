
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <ul className="flex gap-3 items-center justify-center font-semibold my-7">
                    <li><NavLink to={`/`}>Home</NavLink></li>
                    <li><NavLink to={`/users`}>users</NavLink></li>
                    <li><NavLink to={`/signup`}>Sign up</NavLink></li>
                    <li><NavLink to={`/signin`}>Sign in</NavLink></li>
                    <li><NavLink to={`/addCoffee`}>Add Coffee</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;