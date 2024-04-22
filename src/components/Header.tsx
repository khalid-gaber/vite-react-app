import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Subjects">Subjects</Link></li>
                <li><Link to="/Users">Users</Link></li>
                <li><Link to="/form">form</Link></li>
            </ul>
        </nav>
    )
}