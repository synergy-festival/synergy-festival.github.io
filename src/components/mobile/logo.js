import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import logoGif from '../../assests/img/logo.gif'

const Img = styled.img`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
    z-index: 10
`


function Logo() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/')
    }


    return (
        <>
            <Img src={logoGif} onClick={handleClick}    />
        </>
    )
}

export default Logo;