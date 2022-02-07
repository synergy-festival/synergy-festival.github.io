import { isMobile }      from 'react-device-detect';
import DesktopVirtualArtGallery from "./virtualArtGallery.desktop";
import MobileVirtualArtGallery from "./virtualArtGallery.mobile";


function VirtualArtGallery() {
    return (
            isMobile ? <MobileVirtualArtGallery /> : <DesktopVirtualArtGallery />
    )
}

export default VirtualArtGallery;