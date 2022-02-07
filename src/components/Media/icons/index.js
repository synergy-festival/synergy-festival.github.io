import { isMobile } from 'react-device-detect';
import DesktopIcons from "./icons.desktop";
import MobileIcons  from "./icons.mobile";
import { customPixel }  from '../../../helpers'

function Icons() {
    return isMobile ? <MobileIcons handleClick={customPixel}/> : <DesktopIcons handleClick={customPixel}/>
}

export default Icons