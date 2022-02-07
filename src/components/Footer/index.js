import styled          from 'styled-components'
import { isMobile }    from 'react-device-detect';
import Ticker          from '../../components/Ticker'
import { useNavigate } from "react-router-dom";
import { wrapping }    from '../../helpers';
import Logo            from '../../components/Media/logo'


const MobileLogo = styled(wrapping(<Logo />))`
    position: fixed;
    left: 1%;
    bottom: 15%;
    z-index: -1;
    width: 20%;
    height: auto;
    z-index: 1;
`

function Footer({ page }) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }

    if (isMobile) {
        return <><MobileLogo handleClick={handleClick}/><Ticker /></>
    } else {
        return (page == '/') ? <></>  : <Ticker />
    }
 
}


export default Footer;