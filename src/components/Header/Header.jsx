import {Link} from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <h2>Test</h2>
            <Link to="/items">Home</Link>
        </nav>
    )
}

export default Header;