import './style.css';
import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <nav className='menu'>
            <ul>
                <li>
                    <Link to="/" state={'This is state from Home'}>Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10">Post10</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
            </ul>
        </nav>
    )
}