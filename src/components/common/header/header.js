import React from "react";
import "./header.css";

const Header = () => {
    return (
    <div className="max-width header">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
            alt="zomato-logo"
            className="header-logo cur-po"
        />
        <div className="header-right">
            <div className="header-location-search-contianer">
                <div className="location-wrapper">
                    <div className="location-icon-name">
                        <i className="fi fi-rr-marker absolute-center location-icon"></i>
                        <div>Delhi</div>
                    </div>
                    <i class="fi fi-rr-caret-down absolute-center cur-po"></i>
                </div>
                <div className="location-search-separator"></div>
                <div className="header-searchBar">
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder="Search for restaurant, cuisine or a dish" className="search-input"/>
                </div>
            </div>
            <div className="profile-wrapper">
                <img src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="profile" className="header-profile-image cur-po" />
                <span className="header-username cur-po">Sahil</span>
                <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon cur-po"></i>
            </div>
        </div>
    </div>
    ); 
}

export default Header;