import { isMobile }  from 'react-device-detect';
import DesktopHeader from './header.desktop';
import MobileHeader  from './header.mobile';

function Header(props) {
    return isMobile ? <MobileHeader {...props}/> : <DesktopHeader {...props}/>
}

export default Header