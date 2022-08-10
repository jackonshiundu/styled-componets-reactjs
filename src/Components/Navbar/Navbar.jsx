import React, { useState } from 'react'
import { Cancel, Menudata, MobileIcon, Navbarwrapper, NavIcon, NavItems, NavLinks, NavLogo, NavName } from './NavbarStyle'
import {Navdata} from  '../../Data/NavbarData'
import Logo from '../../Assets/logo.svg'
import {  useHistory, useLocation, } from 'react-router-dom'
import {FaTimes} from 'react-icons/fa'
import {CgMenuRight} from 'react-icons/cg'
import { IconContext } from 'react-icons/lib'
const Navbar = () => {

    const [showIcon ,setShowIcon]=useState(false);
    const [showMenu ,SetShowMenu]=useState(true);

    let History=useHistory();
    let location = useLocation();


    const handleClick=()=>{
        setShowIcon(!showIcon)
    }
    const closeMenuBar=()=>{
        SetShowMenu(!showMenu)
    }
    
    const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

    const  goToClickedLink=(to,id)=>{
        if(id && location.pathname==='/' ){
            scrollTo(id)
        }
        History.push(to)
        SetShowMenu(!showMenu)

    }
      return (
        <Navbarwrapper>
                <NavLogo src={Logo}/>
                <NavName>
                    Jaguar Solutions
                </NavName>
                <NavIcon onClick={handleClick}>{showIcon?<Cancel onClick={closeMenuBar}><FaTimes/></Cancel>:<CgMenuRight/>}</NavIcon>
            <Menudata display={!showIcon}>
                {
                    Navdata.map((navdata,index)=>(
                        <NavItems key={index}>
                            <NavLinks onClick={()=>goToClickedLink(navdata.to,navdata.id)}>{navdata.text}</NavLinks>
                        </NavItems>
                    ))
                }
            </Menudata>
        </Navbarwrapper>
      )

    }
    
export default Navbar