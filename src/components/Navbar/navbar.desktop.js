import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import { NavLink } from "react-router-dom";

const Nav = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1% 0;
    justify-content: space-between;
    font-size: 1.2vw;
    margin-top: 1rem;
`


const NavItem = styled(NavLink)`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: auto;
    border-radius: 5rem;
    padding: .5rem 1rem;  
    border: .2rem solid ${(props) => rgba(props.page == '/' ? props.theme.color.black : props.theme.color.purple, props.theme.alpha.primary)};
    color: ${(props) => props.page == '/'  ? props.theme.color.black : props.theme.color.purple};
    background-color: ${(props) => props.theme.color.transparent};

    &:link {
        text-decoration: none;
    }

    &:hover {
        color: ${(props) => props.page != '/' ? props.theme.color.black: props.theme.color.purple};
        background-color: ${(props) => props.page == '/' ? props.theme.color.black: props.theme.color.purple};
        transition: all .5s;
    }

    &.active {
        color: ${(props) => props.theme.color.black};
        background-color: ${(props) => props.theme.color.purple};
    }

    ${props => !props.last && css`
        margin-right: .5%;
    `}

    ${props => props.disabled && css`
        pointer-events: none;
        color ${rgba(props.page == '/' ? props.theme.color.black: props.theme.color.purple, props.theme.alpha.middle)}; 
        border-color: ${rgba(props.page == '/' ? props.theme.color.black: props.theme.color.purple, props.theme.alpha.light)};
    `}
`;



function NavDesktop({ page }) {

    return (
        <Nav>
            <NavItem page={page} to='/news'>News</NavItem>
            <NavItem page={page} to='/about'>About</NavItem>
            <NavItem page={page} to='/artist'>Artist</NavItem>
            <NavItem page={page} to='/ticket'>Ticket</NavItem>
            <NavItem page={page} to='/shop' disabled>Shop</NavItem>
            <NavItem page={page} to='/location' disabled>Location</NavItem>
            <NavItem page={page} to='/virtual-art-gallery' last>Virtual Art Gallery</NavItem>
        </Nav>
    )
}


export default NavDesktop;