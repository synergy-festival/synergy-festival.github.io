import styled, { css, keyframes } from 'styled-components'
import { useNavigate } from "react-router-dom";
import logoWebm from '../../assests/video/logo.webm'
import logoMov  from '../../assests/video/logo.mov'


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



const Video = styled.video`
    width: 3%;
    height: auto;
    margin-left: .1%;
`;


function Back() {
    const navigate = useNavigate();
    return (
        <Div onClick={()=>(navigate('/'))}>
            <P>Back To Home</P>
            <Video playsInline autoPlay muted loop>
                <source src={logoMov}  type='video/mp4' codecs='hvc1' />
                <source src={logoWebm} type='video/webm' />
            </Video>
        </Div>
    )
}

export default Back;