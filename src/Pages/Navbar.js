import React, { useState } from 'react'
import styled from 'styled-components'

export default function Navbar() {
    const[hamer,setHamer]=useState(false);
  return (
    <Nav>
        <div className="logo">
            <h3>Rahul Sharma</h3>

        </div>
        <div className={hamer ? "menus menu-mobile" : "menus"}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Help</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="close" onClick={()=>setHamer(false)}>
                <span className='span1'></span>
                <span className='span2'></span>
            </div>
        </div>
        <div className="hamburger" onClick={()=>setHamer(!hamer)} > 
       
           
            <span></span>
            <span></span>
            <span></span>
            
        </div>

    </Nav>
    
    
  )
}

const Nav = styled.div`
width: 100vw;
height: 100px;
background-color: red;
display: flex;
align-items: center;
justify-content: space-around;

.hamburger{
    display: none;
}
.menu-mobile{
    display: none;
}


.menus ul{
    display: flex;
    align-items: center;
    justify-content:center;
}
.menus ul li{
    list-style: none;
    margin: 5px;

}
.menus ul li a{
    text-decoration: none;
color: white;
}


@media (max-width:998px) {
    .menus{
        display: none;
    }
    .menu-mobile{
        display: flex;
    
        align-items: center;
        justify-content: center;
     position: fixed;
    top: 0px;
     width: 100vw;
     height: 100vh;
        background-color: black;
        z-index: 99;

        
    }
    .menu-mobile ul{
        flex-direction: column;
    }

    .close{
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30px;
    width: 30px;

}
.close span{
    height: 2px;
    width: 100%;
    background-color: white;
}
.span1{
    transform: rotate(5deg);
}
.span2{
    transform: rotate(-30deg);
}


    .hamburger{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 30px;
        width: 30px;
        position: absolute;
        right: 10px;
        /* background-color: white; */
    }
   
    .hamburger  span{
        height: 2px;
        width: 90%;
        background-color: white;
       /* margin: 5px; */
    }
    
}

`
