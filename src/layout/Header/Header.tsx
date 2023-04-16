import { NavLink } from 'react-router-dom';
import './style.css';

export const Header = () => {
    return (
        <header>
            <div className="parts">
                <img src="https://api.artic.edu/docs/assets/logo.svg" alt="logo" />
                <h1>Art Institute of Chicago API</h1>
            </div>
            <div className="parts">
                <NavLink to="/">Artwork list</NavLink>
                <NavLink to="/favorites">Favorite artworks</NavLink>
            </div>
        </header>
    );
};
