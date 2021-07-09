import {Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";
import "./Header.css"

const Header = () => {
    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <nav className="Nav">
            <div className ="Nav_Links">
                <h2>Test</h2>
                <Link to="/" className="Nav_Link">Home</Link>
                <Link to="/items"></Link>
                <Link to="/categories"></Link>
            </div>
            <div>
                <Link className="Nav_user_link" to="/SelectUser"></Link>
                <span>{user.username}</span>
                <img src={user.avatar_url} alt={user.username} className="Nav_user_avatar"></img>
            </div>
        </nav>
    )
}

export default Header;