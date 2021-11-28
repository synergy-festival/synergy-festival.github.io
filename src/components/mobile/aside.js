import styled, {css} from 'styled-components'
import { rgba } from 'polished'
import logoGif from '../../assests/img/output.gif'
import { useNavigate } from "react-router-dom";

const Div = styled.div`
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


const Video = styled.video`
    width: 30%;
    height: auto;
`

const Button = styled.div`
    text-align: center;
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    boredr-radius: 0;
    text-transform: uppercase;
    width: 80%;
    border: none;
    border-bottom: .2rem solid ${rgba('#AE69FF', 0.6)};
    color: ${rgba('#AE69FF', 0.6)}; 
    background-color: transparent;

    ${props => props.page == 'about' && css`
        color ${rgba('#AE69FF', 1.0)}; 
        border-color: ${rgba('#AE69FF', 1.0)};
    `}

    ${props => props.disabled && css`
        pointer-events: none;
        color ${rgba('#AE69FF', 0.4)}; 
        border-color: ${rgba('#AE69FF', 0.2)};
    `}
`

const Img = styled.img`
    width: 30%;
    height: auto;
`



function Aside(props) {
    const navigate = useNavigate();
    const {menu, setMenu, page} = props

    function handleClick() {
        setMenu(false)
        navigate('/about')
    }

    return (
        <Div menu={menu}>
                <Img src={logoGif} />
                <Button page={page} disabled>News</Button>
                <Button page={page} 
                        onClick={handleClick}>
                    About
                </Button>
                <Button page={page} disabled>Artist</Button>
                <Button page={page} disabled>Ticket</Button>
                <Button page={page} disabled>Merch</Button>
                <Button page={page} disabled>NFT</Button>
                <Button page={page} disabled>Virtual Exhibition</Button>
        </Div>
    )
}


export default Aside;