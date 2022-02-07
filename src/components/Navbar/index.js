import NavMobile    from "./navbar.mobile";
import NavDesktop   from "./navbar.desktop";
import { isMobile } from 'react-device-detect';

function Nav(props) {
    return isMobile ? <NavMobile {...props}/> : <NavDesktop {...props}/>
} 


export default Nav;