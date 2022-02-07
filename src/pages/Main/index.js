import { isMobile } from 'react-device-detect';
import DesktopMain  from "./main.desktop";
import MobileMain   from "./main.mobile";

function Main(props) {
    return isMobile ? <MobileMain {...props}/> : <DesktopMain {...props}/>
}

export default Main