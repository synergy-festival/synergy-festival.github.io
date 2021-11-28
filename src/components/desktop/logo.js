import styled from 'styled-components'
import logoWebm from '../../assests/video/logo.webm'
import logoMov  from '../../assests/video/logo.mov'





const Video = styled.video`
    margin-top: -3rem;
    z-index: -1;
    width: 15%;
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