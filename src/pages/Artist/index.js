import { isMobile } from 'react-device-detect';
import Gallery      from './gallery'
import TwoCol       from "../../components/Layout/twoCol";


function Artist() {
    if (isMobile) {
        return (
            <TwoCol top={'Artist'} bottom={<Gallery />}/>
        )
    } else {
        return (
            <Gallery />
        )
    }

}

export default Artist;