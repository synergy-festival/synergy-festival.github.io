import { useState } from 'react'
import { rgba } from 'polished'
import styled, { css }  from 'styled-components'
import { Spin as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Logo from '../Media/logo'
import { wrapping } from '../../helpers';

const HamburgerDiv = styled.div`
    width : 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: 1px solid #AE69FF;
    border-radius: 50%;
    z-index: 20;

    ${props => props.page != '/' && css`
        position: fixed;
        top  : 4%;
        right: 7%;
    `}
`;

const MenuDiv = styled.div`
    position: fixed;
    top : 0;
    left: 0;
    width; 100%;
    height: 100%;
    background-color: #FFFFFF;
    z-index: 10;
    transform: translateX(${(props) => !props.menu ? '-100%': '0%'});
    transition: transform 0.3s linear;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10% 0;
`

const NavItem = styled(NavLink)`
    text-align: center;
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    boredr-radius: 0;
    text-transform: uppercase;
    text-decoration: none;
    width: 80%;
    border: none;
    border-bottom: .2rem solid ${rgba('#AE69FF', 0.6)};
    color: ${rgba('#AE69FF', 0.6)}; 
    background-color: transparent;

    &.active {
        color ${rgba('#AE69FF', 1.0)}; 
        border-color: ${rgba('#AE69FF', 1.0)};
    }


    ${props => props.disabled && css`
        pointer-events: none;
        color ${rgba('#AE69FF', 0.4)}; 
        border-color: ${rgba('#AE69FF', 0.2)};
    `}  
`



const LogoMobile = styled(wrapping(<Logo />))`
    width: 30%;
    height: auto;
`


function Menu(props) {
    const {menu, setMenu, page} = props
    function handleClick() {
        setMenu(false)
    }
    return (
        <MenuDiv menu={menu}>
            <LogoMobile />
            <NavItem page={page} to='/news'   onClick={handleClick}>News</NavItem>
            <NavItem page={page} to='/about'  onClick={handleClick}>About</NavItem>
            <NavItem page={page} to='/artist' onClick={handleClick}>Artist</NavItem>
            <NavItem page={page} to='/ticket' onClick={handleClick}>Ticket</NavItem>
            <NavItem page={page} to='/shop'     disabled>Shop</NavItem>
            <NavItem page={page} to='/location' disabled>Location</NavItem>
            <NavItem page={page} to='/virtual-art-gallery' disabled>Virtual Art Gallery</NavItem>
        </MenuDiv>
    )
    
}



function NavMobile(props) {
    const { page } = props
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {!menu ? setMenu(true) : setMenu(false);};
    return (
        <>
            <HamburgerDiv page={page}>
                <Hamburger
                    onClick={handleMenu}
                    rounded
                    toggled={menu}
                    toggle={setMenu}
                    easing="ease-in"
                    size={14}
                    color='#AE69FF'
                />
            </HamburgerDiv>
            <Menu menu={menu} setMenu={setMenu} page={page}/>
        </>
    )
}


export default NavMobile;