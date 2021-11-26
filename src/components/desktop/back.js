import logoImg from '../../assests/img/logo-silver.png'
import styled, { css, keyframes } from 'styled-components'
import { useNavigate } from "react-router-dom";


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
    ${props => props.space && css`
        transform: rotate(30deg) scale(1.2);
    `}
`;


const rotateAnimation = keyframes`
 0% { transform: rotateY(0deg); }
 100% { transform: rotateY(360deg); }
`


const Img = styled.img`
    width: 4%;
    height: auto;
    margin-left: .5%;
    animation-name: ${rotateAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`;


function Back() {
    const navigate = useNavigate();
    return (
        <Div>
            <P onClick={()=>(navigate('/'))}>Back To Home</P>
            <Img src={logoImg} />
        </Div>
    )
}

export default Back;