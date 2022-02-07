import logoGif      from '../../assests/img/logo.gif'
import logoWebm     from '../../assests/video/logo.webm'
import logoMov      from '../../assests/video/logo.mov'
import { isMobile } from 'react-device-detect';




function Logo() {
    
    if (isMobile) {
        return <img src={logoGif} />
    } else {
        return (
            <video playsInline autoPlay muted loop>
                <source src={logoMov}  type='video/mp4' codecs='hvc1' />
                <source src={logoWebm} type='video/webm' />
            </video>
        )
    }
}


export default Logo;