import styled  from 'styled-components'
import Marquee from "react-fast-marquee";

const DesktopDiv = styled.div`
    width: 100%;
    height: auto;
    color: #AE69FF;
    position: fixed;
    left: 0;
    bottom: 1%;
`;

const DesktopSpan = styled.span`
    font-size: max(1.4vw, 16px);
    white-space: nowrap;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

`;

const DesktopSymbol = styled.span`
    vertical-align: center;
    height: auto;
    font-size: max(1vw, 12px);
    white-space: nowrap;

    &::selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

    &::-moz-selection {
        background: #AE69FF;
        color: #FFFFFF;
    }

`;

const DesktopStyle = {
  height: 'auto',
  fontSize: '3vw',
  color: '#AE69FF',
  display: 'flex',
}


function DesktopTicker() {
    return (
        <DesktopDiv>
            <Marquee style={DesktopStyle} gradientWidth='10'>
                <DesktopSpan>SYNERGY Festival  2022.3.19 <DesktopSymbol>&rarr;</DesktopSymbol> 20</DesktopSpan>
                <DesktopSpan>Shape The Future With Music, Art and Technology</DesktopSpan>
            </Marquee>
        </DesktopDiv>
    )
}

export default DesktopTicker;