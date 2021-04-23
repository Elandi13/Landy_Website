import React from 'react'
import {Link} from "react-router-dom"


export default function Header() {
    return (
        <header className="banner">
            <Link to="/homepage"> 
            <div className="header-image">
                <img className="banner-image" src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/34133648_1611198455655622_7058306055465336832_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OWcEf6opXmIAX_P3e7G&_nc_ht=scontent-lga3-1.xx&oh=c0a3e4495b222f38cd0d636abb572b00&oe=60AA71F1" alt="banner"/>
            </div>
            </Link>

        </header>
    )
}
