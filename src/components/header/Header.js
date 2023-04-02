import React from 'react';
import './Header.scss'
import BackgroundHandleChange from "../backgroundHandleChange/BackgroundHandleChange";

function Header({date, day, background, setBackground}) {
    return (
        <div>
            <h1 className='title1'>Офіційний звіт генштабу щодо втрат армії російської федерації</h1>
            <h2>станом на {date}</h2> {/* semantically this is not a headline, so just use <p> */}
            <h2>День: {day}</h2>
            <BackgroundHandleChange background = {background} setBackground = {setBackground}/>
        </div>
    );
}

export default Header;