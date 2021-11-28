import styled, { css }  from 'styled-components'
import { Spin as Hamburger } from "hamburger-react";
import { useState } from 'react'
import Aside from './aside'

const Div = styled.div`
    width : 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: 1px solid #AE69FF;
    border-radius: 50%;
    z-index: 20;

    ${props => props.page != 'main' && css`
        position: fixed;
        top  : 4%;
        right: 7%;
    `}
`;





function Nav(props) {
    const { page } = props
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        !menu ? setMenu(true) : setMenu(false);
    };
    return (
        <>
            <Div page={page}>
                <Hamburger
                    onClick={handleMenu}
                    rounded
                    toggled={menu}
                    toggle={setMenu}
                    easing="ease-in"
                    size={16}
                    color='#AE69FF'
                />
            </Div>
            <Aside menu={menu} setMenu={setMenu} page={page}/>
        </>
    )
}


export default Nav;