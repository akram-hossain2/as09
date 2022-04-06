import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='header-box'>
          <h1>Bikeshop BD</h1>
            <nav>
                <CustomLink to="/home" className="route-style">Home</CustomLink>
                <CustomLink to="/reviews" className="route-style">Reviews</CustomLink>
                <CustomLink to="/dashboard" className="route-style">Dashboard</CustomLink>
                <CustomLink to="/blogs" className="route-style">Blogs</CustomLink>
                <CustomLink to="/about" className="route-style">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;