import { isMobile }    from 'react-device-detect';
import styled, { css } from 'styled-components'
import titleDesktopImg from '../../assests/img/title-white.svg'
import titleMobileImg  from '../../assests/img/title-purple.svg'


const Img = styled.img`
    width : 100%;
    height: auto;
    ${props => props.isMobile && css`
        margin-top: 1vh;
        padding: 0 1%;
    `}

`;


function Title() {
    return <Img isMobile={isMobile} src={isMobile?titleMobileImg:titleDesktopImg} />
}


export default Title;