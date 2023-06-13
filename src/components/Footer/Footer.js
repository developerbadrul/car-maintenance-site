import React from 'react';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    console.log(year);
    
    return (
        <div>
            <h5>this is footer {year}</h5>
        </div>
    );
};

export default Footer;