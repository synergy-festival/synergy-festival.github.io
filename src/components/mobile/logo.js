import styled, {keyframes} from 'styled-components'
import logoImg from '../../assests/img/logo-silver.png'


const rotateAnimation = keyframes`
 0% { transform: rotateY(0deg); }
 100% { transform: rotateY(360deg); }
`


const Img = styled.img`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
    animation-name: ${rotateAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`;


function Logo() {
    return (
        <>
            <Img src={logoImg} alt="" className='cover'/>
        </>
    )
}


export default Logo;