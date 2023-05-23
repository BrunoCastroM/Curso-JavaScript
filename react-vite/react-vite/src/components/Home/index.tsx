import { useLocation } from 'react-router-dom';
import './style.css';

export const Home = () => {
    const { state } = useLocation()

    return (
        <div>
            <h1>Home</h1>
            <p>{state}</p>
        </div>
    )
}