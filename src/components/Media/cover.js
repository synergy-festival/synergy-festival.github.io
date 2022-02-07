import styled  from 'styled-components'
import { isMobile } from 'react-device-detect';
import coverMobileImg  from '../../assests/img/cover-mobile.png'
import coverDesktopImg from '../../assests/img/cover-desktop.png'

const MobileDiv = styled.div`
    width: 100%;
    height: 80%; 
    overflow: hidden;
    display: flex;
    position: absolute;
    top: 20%;
    
`

const MobileImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    background-color: #FFFFFF;
    -webkit-backface-visibility: hidden;
    flex-grow:1;
    transforme: scale(1.5);
`

const DesktopImg = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
    z-index: -1;
    background-color: #AE69FF;
`


function Cover() {
    
    if (isMobile) {
        return (
            <MobileDiv>
                <MobileImg src={coverMobileImg} alt='cover' className='cover'/>
            </MobileDiv>
        )
    } else {
        console.log('cover')
        return (
            <>
                <DesktopImg src={coverDesktopImg} alt='cover' className='cover'/>
            </>
        )
    }
}


export default Cover;