import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../store/auth";

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    function logoutHandler() {
        dispatch(authActions.logout());
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    <li>
                        {isAuthenticated&&<a href='/'>My Products</a>}
                    </li>
                    <li>
                        {isAuthenticated&&<a href='/'>My Sales</a>}
                    </li>
                    <li>
                        {isAuthenticated ? <button onClick={logoutHandler}>Logout</button> : <button >Login</button>}
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
