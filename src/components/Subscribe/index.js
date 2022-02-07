import { isMobile }     from 'react-device-detect';
import MobileSubscribe  from "./subscribe.mobile";
import DesktopSubscribe from "./subscribe.desktop";

function Subscribe() {
    return isMobile ? <MobileSubscribe /> : <DesktopSubscribe />
}

export default Subscribe