import styled, {css} from 'styled-components'
import { rgba } from 'polished'
import { useNavigate } from "react-router-dom";

const Div = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 1% 0;
    justify-content: space-between;
    font-size: 1.2vw;
    margin-top: 1rem;
`

const Button = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    width: auto;
    border: .2rem solid #FFFFFF;
    border-radius: 5rem;
    color: ${(props) => props.page == 'main'  ? '#FFFFFF': props.active? '#FFFFFF':'#AE69FF'};
    background-color: ${(props) => props.active ? '#AE69FF': 'transparent'};
    padding: .5rem 1rem;  

    &:hover {
        color: ${(props) => props.page != 'main' ? '#FFFFFF': '#AE69FF'};;
        background-color: ${(props) => props.page == 'main' ? '#FFFFFF': '#AE69FF'};
        transition: all .5s;
    }



    ${props => !props.last && css`
        margin-right: .5%;
    `}

    ${props => props.disabled && css`
        pointer-events: none;
        color ${rgba(props.page == 'main' ? '#FFFFFF': '#AE69FF', 0.6)}; 
        border-color: ${rgba(props.page == 'main' ? '#FFFFFF': '#AE69FF', 0.4)};
    `}




`




function Nav(props) {
    const navigate = useNavigate();
    console.log(props.active)
    return (
        <Div>
            <Button page={props.page} disabled>News</Button>
            <Button page={props.page} active={props.active} onClick={()=> (navigate("/about"))}>About</Button>
            <Button page={props.page} disabled>Artist</Button>
            <Button page={props.page} disabled>Ticket</Button>
            <Button page={props.page} disabled>Merch</Button>
            <Button page={props.page} disabled>NFT</Button>
            <Button page={props.page} last={true} disabled={true}>Virtual Exhibition</Button>
        </Div>
    )
}


export default Nav;