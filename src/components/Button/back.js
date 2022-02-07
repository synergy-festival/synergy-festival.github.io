import styled, { css } from 'styled-components'
import { useNavigate } from "react-router-dom";
import { wrapping } from '../../helpers';
import Logo from '../Media/logo'


const Div = styled.div`
    width: auto;
    height: auto;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

const P = styled.p`
    display: inline-block;
    width: auto;
    height: auto;
    color : #AE69FF; 
    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }


    ${props => props.space && css`
        transform: rotate(30deg) scale(1.2);
    `}
`;


const LogoRight = styled(wrapping(<Logo />))`
    width: 3%;
    height: auto;
    margin-left: .1%;
`


function Back() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/')
    }

    return (
        <Div onClick={handleClick}>
            <P>Back To Home</P>
            <LogoRight />
        </Div>
    )
}

export default Back;