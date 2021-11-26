import styled  from 'styled-components'
import { Spin as Hamburger } from "hamburger-react";
import { useState } from 'react'

const Div = styled.div`
    width : 2.5rem;
    height: 2.5rem;
    background: transparent;
    border: 1px solid #AE69FF;
    border-radius: 50%;
`;


function Nav() {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        !menu ? setMenu(true) : setMenu(false);
    };

    return (
        <Div>
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
    )
}


export default Nav;