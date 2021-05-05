import React from 'react'
import './Header.css'
import AboutUs from './header/AboutUs'
import ContactUs from './header/ContactUs'
import Demo from './header/Demo'
import Home from './header/Home'
import Products from './header/Products'
import HeaderImg from './HeaderImg'

const Header = () => {
    return (
        <div className="container">
            <div className="header__right">
                <HeaderImg/>
                <Home/>
                <Products/>
                <AboutUs/>
                <Demo/>
                <ContactUs/>
            </div>
        </div>
    )
}

export default Header
