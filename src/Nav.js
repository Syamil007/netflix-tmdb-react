import React, { useEffect, useState } from 'react'
import './nav.css';

function Nav() {

    const [show, setShow]=useState(false);

    useEffect(()=>{

        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 400) {
                setShow(true);            
            } else{setShow(false);}
    });

    return ()=>{window.removeEventListener('scroll',null)};
    }, []);

    console.log(show)

  return (

    <div className={show? "nav_black" : "nav"}>

        <img 
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='netflix logo'/>

<img 
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='avatar'/>

    </div>
  )
}

export default Nav