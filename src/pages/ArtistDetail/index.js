import { isMobile }   from 'react-device-detect';
import { getArtists } from '../../data'
import { useParams } from "react-router-dom";
import DesktopArtistDetail  from './artistDetail.desktop'
import MobileArtistDetail   from './artistDetail.mobile'

function ArtistDetail() {

    const artistData = getArtists();
    const params     = useParams();
    const artistId   = params.artistId;
    const index      = artistData['data'].findIndex( x => x.name === artistId);
    const matched    = artistData['data'][index]


    return (
        isMobile ? <MobileArtistDetail {...matched}/> : <DesktopArtistDetail {...matched}/>
    )

}


export default ArtistDetail