import { isMobile } from 'react-device-detect';
import DesktopTicker from './ticker.dekstop';
import MobileTicker  from './ticker.mobile';


function Ticker() {
    return isMobile ? <MobileTicker/> : <DesktopTicker/>
}


export default Ticker;