import styled from 'styled-components'
import logoWebm from '../../assests/video/logo.webm'
import logoMov  from '../../assests/video/logo.mov'





const Video = styled.video`
    position: absolute;
    left: max(5%, 5px);
    bottom: max(20%, 20px);
    z-index: -1;
    width: max(15%, 30px);
    height: auto;
`


function Logo() {
    return (
        <>
            <Video playsInline autoPlay muted loop>
                <source src={logoMov}  type='video/mp4' codecs='hvc1' />
                <source src={logoWebm} type='video/webm' />
            </Video>
        </>
    )
}


export default Logo;