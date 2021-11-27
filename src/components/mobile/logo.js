import styled from 'styled-components'
import logoVideo from '../../assests/video/logo.webm'





const Video = styled.video`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
`


function Logo() {
    return (
        <>
            {/* <Img src={logoImg} alt="" className='cover'/> */}
            <Video autoPlay muted loop>
                <source src={logoVideo} type='video/webm' />
            </Video>
        </>
    )
}


export default Logo;